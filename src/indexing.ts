import { ponder } from "@/generated";

ponder.on("BalancerPool:PoolMetadataUpdated", async ({ event, context }) => {
  const { poolId, metadataCID } = event.args;

  const existingPool = await context.db.Pool.findUnique({ id: poolId });

  if (existingPool) {
    await context.db.Pool.update({
      id: poolId,
      data: { metadataCID },
    });
  } else {
    await context.db.Pool.create({
      id: poolId,
      data: { metadataCID },
    });
  }
  await context.db.PoolHistory.upsert({
    id: poolId.concat(event.block.timestamp.toString()),
    create: { poolId, metadataCID, timeStamp: event.block.timestamp },
    update: {},
  });
});
