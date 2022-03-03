const scatterPlotConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 50, 90],
  tooltip: {
    hasTooltip: true,
    content: ["queryNodes"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#43a2ca",
  },
  title: {
    text: "queryNodes & QPS / RT",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  circle: {
    r: 3,
    strokeColor: "#fff",
    strokeWidth: 1,
    isCircleColorMapping: true,
    circleColor: "name",
    withLabels: true,
    label: "(item) => `${item.name}=${item.value}`",
    labelFontSize: 14,
    withLinks: true,
    isLinkColorMapping: true,
    linkType: "curve",
    linkWidth: 2,
    linkColor: "name",
  },
  x: {
    key: "queryNodes",
    scaleType: "linear",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "queryNodes",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "value",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: false,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: true,
    key: "name",
    sameXScale: true,
    sameYScale: true,
  },
};

export default scatterPlotConfig;