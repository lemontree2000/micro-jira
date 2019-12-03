import mx from 'mxgraph'

const mxgraph = mx({
  mxBasePath: '/mxgraph'
})

// Overridden to define per-shape connection points
// 重写以定义每个形状的连接点
mxgraph.mxGraph.prototype.getAllConnectionConstraints = (terminal, source) => {
  if (terminal != null && terminal.shape != null) {
    if (terminal.shape.stencil != null) {
      if (terminal.shape.stencil != null) {
        return terminal.shape.stencil.constraints
      }
    } else if (terminal.shape.constraints != null) {
      return terminal.shape.constraints
    }
  }
  return null
}
// 定义靶点
// @ts-ignore
mxgraph.mxShape.prototype.constraints = [
  new mxgraph.mxConnectionConstraint(new mxgraph.mxPoint(0.5, 0), true),
  new mxgraph.mxConnectionConstraint(new mxgraph.mxPoint(0, 0.5), true),
  new mxgraph.mxConnectionConstraint(new mxgraph.mxPoint(1, 0.5), true),
  new mxgraph.mxConnectionConstraint(new mxgraph.mxPoint(0.5, 1), true)
]

// tslint:disable-next-line: no-var-requires
// const pointImage = require('@/assets/images/point.svg')
// mxgraph.mxConstraintHandler.prototype.pointImage = new mxgraph.mxImage(
//   pointImage,
//   5,
//   5
// )

export default mxgraph
