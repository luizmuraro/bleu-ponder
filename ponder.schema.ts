import { createSchema } from "@ponder/core";
// const { createSchema } = require("@ponder/core");

const schema = createSchema((p) => ({
  Pool: p.createTable({
    id: p.string(),
    metadataCID: p.string(),
    poolHistory: p.many('PoolHistory.poolId')
  }),
  PoolHistory: p.createTable({
    id: p.string(),
    poolId: p.string().references('Pool.id'),
    metadataCID: p.string(),
    timeStamp: p.bigint()
    
  })
}));

export default schema;
