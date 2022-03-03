const scatterPlotConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 50, 90],
  tooltip: {
    hasTooltip: true,
    content: ["deploy_mode", "RT", "QPS"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#666",
  },
  title: {
    text: "RT & QPS - 1m",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  circle: {
    r: 3,
    strokeColor: "#fff",
    strokeWidth: 1,
    isCircleColorMapping: true,
    circleColor: "deploy_mode",
    withLabels: true,
    label: "(item) => `${item.QPS}`",
    labelFontSize: 14,
    withLinks: true,
    isLinkColorMapping: true,
    linkType: "curve",
    linkWidth: 2,
    linkColor: "deploy_mode",
  },
  x: {
    key: "RT",
    scaleType: "linear",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "RT(TP99) / ms",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "QPS",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "QPS",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: false,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: true,
    key: "deploy_mode",
    sameXScale: true,
    sameYScale: true,
  },
};

export default scatterPlotConfig;