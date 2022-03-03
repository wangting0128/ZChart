const scatterPlotConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 60, 90],
  dataProcessing: {
    needFixed: true,
    fixedKey: "vps",
    fixedNum: 2,
  },
  tooltip: {
    hasTooltip: true,
    content: ["vps", "nq", "topk"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#666",
  },
  title: {
    text: "nq & VPS - 1m",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  circle: {
    r: 3,
    strokeColor: "#fff",
    strokeWidth: 1,
    isCircleColorMapping: true,
    circleColor: "topk",
    withLabels: true,
    label: "(item) => `${item.vps}`",
    labelFontSize: 14,
    withLinks: true,
    isLinkColorMapping: true,
    linkType: "curve",
    linkWidth: 2,
    linkColor: "topk",
  },
  x: {
    key: "nq",
    scaleType: "linear",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "nq",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "vps",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "VPS",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: true,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: true,
    key: "topk",
    sameXScale: true,
    sameYScale: true,
  },
};

export default scatterPlotConfig;
