/* eslint-disable max-classes-per-file */
import React, { PureComponent } from "react";
import {
    Treemap,
    ResponsiveContainer,
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "axis",
        children: [
            { name: "Axes", size: 1302 },
            { name: "Axis", size: 24593 },
            { name: "AxisGridLine", size: 652 },
            { name: "AxisLabel", size: 636 },
            { name: "CartesianAxes", size: 6703 },
        ],
    },
    {
        name: "controls",
        children: [
            { name: "AnchorControl", size: 2138 },
            { name: "ClickControl", size: 3824 },
            { name: "Control", size: 1353 },
            { name: "ControlList", size: 4665 },
            { name: "DragControl", size: 2649 },
            { name: "ExpandControl", size: 2832 },
            { name: "HoverControl", size: 4896 },
            { name: "IControl", size: 763 },
            { name: "PanZoomControl", size: 5222 },
            { name: "SelectionControl", size: 7862 },
            { name: "TooltipControl", size: 8435 },
        ],
    },
    {
        name: "data",
        children: [
            { name: "Data", size: 20544 },
            { name: "DataList", size: 19788 },
            { name: "DataSprite", size: 10349 },
            { name: "EdgeSprite", size: 3301 },
            { name: "NodeSprite", size: 19382 },
            {
                name: "render",
                children: [
                    { name: "ArrowType", size: 698 },
                    { name: "EdgeRenderer", size: 5569 },
                    { name: "IRenderer", size: 353 },
                    { name: "ShapeRenderer", size: 2247 },
                ],
            },
            { name: "ScaleBinding", size: 11275 },
            { name: "Tree", size: 7147 },
            { name: "TreeBuilder", size: 9930 },
        ],
    },
    {
        name: "events",
        children: [
            { name: "DataEvent", size: 7313 },
            { name: "SelectionEvent", size: 6880 },
            { name: "TooltipEvent", size: 3701 },
            { name: "VisualizationEvent", size: 2117 },
        ],
    },
    {
        name: "legend",
        children: [
            { name: "Legend", size: 20859 },
            { name: "LegendItem", size: 4614 },
            { name: "LegendRange", size: 10530 },
        ],
    },
    {
        name: "operator",
        children: [
            {
                name: "distortion",
                children: [
                    { name: "BifocalDistortion", size: 4461 },
                    { name: "Distortion", size: 6314 },
                    { name: "FisheyeDistortion", size: 3444 },
                ],
            },
            {
                name: "encoder",
                children: [
                    { name: "ColorEncoder", size: 3179 },
                    { name: "Encoder", size: 4060 },
                    { name: "PropertyEncoder", size: 4138 },
                    { name: "ShapeEncoder", size: 1690 },
                    { name: "SizeEncoder", size: 1830 },
                ],
            },
            {
                name: "filter",
                children: [
                    { name: "FisheyeTreeFilter", size: 5219 },
                    { name: "GraphDistanceFilter", size: 3165 },
                    { name: "VisibilityFilter", size: 3509 },
                ],
            },
            { name: "IOperator", size: 1286 },
            {
                name: "label",
                children: [
                    { name: "Labeler", size: 9956 },
                    { name: "RadialLabeler", size: 3899 },
                    { name: "StackedAreaLabeler", size: 3202 },
                ],
            },
            {
                name: "layout",
                children: [
                    { name: "AxisLayout", size: 6725 },
                    { name: "BundledEdgeRouter", size: 3727 },
                    { name: "CircleLayout", size: 9317 },
                    { name: "CirclePackingLayout", size: 12003 },
                    { name: "DendrogramLayout", size: 4853 },
                    { name: "ForceDirectedLayout", size: 8411 },
                    { name: "IcicleTreeLayout", size: 4864 },
                    { name: "IndentedTreeLayout", size: 3174 },
                    { name: "Layout", size: 7881 },
                    { name: "NodeLinkTreeLayout", size: 12870 },
                    { name: "PieLayout", size: 2728 },
                    { name: "RadialTreeLayout", size: 12348 },
                    { name: "RandomLayout", size: 870 },
                    { name: "StackedAreaLayout", size: 9121 },
                    { name: "TreeMapLayout", size: 9191 },
                ],
            },
            { name: "Operator", size: 2490 },
            { name: "OperatorList", size: 5248 },
            { name: "OperatorSequence", size: 4190 },
            { name: "OperatorSwitch", size: 2581 },
            { name: "SortOperator", size: 2023 },
        ],
    },
];

const COLORS = [
    "#8889DD",
    "#9597E4",
    "#8DC77B",
    "#A5D297",
    "#E2CF45",
    "#F8C12D",
];

const DATA = [
    { name: "1", uv: 300, pv: 456 },
    { name: "2", uv: -145, pv: 230 },
    { name: "3", uv: -100, pv: 345 },
    { name: "4", uv: -8, pv: 450 },
    { name: "5", uv: 100, pv: 321 },
    { name: "6", uv: 9, pv: 235 },
    { name: "7", uv: 53, pv: 267 },
    { name: "8", uv: 252, pv: -378 },
    { name: "9", uv: 79, pv: -210 },
    { name: "10", uv: 294, pv: -23 },
    { name: "12", uv: 43, pv: 45 },
    { name: "13", uv: -74, pv: 90 },
    { name: "14", uv: -71, pv: 130 },
    { name: "15", uv: -117, pv: 11 },
    { name: "16", uv: -186, pv: 107 },
    { name: "17", uv: -16, pv: 926 },
    { name: "18", uv: -125, pv: 653 },
    { name: "19", uv: 222, pv: 366 },
    { name: "20", uv: 372, pv: 486 },
    { name: "21", uv: 182, pv: 512 },
    { name: "22", uv: 164, pv: 302 },
    { name: "23", uv: 316, pv: 425 },
    { name: "24", uv: 131, pv: 467 },
    { name: "25", uv: 291, pv: -190 },
    { name: "26", uv: -47, pv: 194 },
    { name: "27", uv: -415, pv: 371 },
    { name: "28", uv: -182, pv: 376 },
    { name: "29", uv: -93, pv: 295 },
    { name: "30", uv: -99, pv: 322 },
    { name: "31", uv: -52, pv: 246 },
    { name: "32", uv: 154, pv: 33 },
    { name: "33", uv: 205, pv: 354 },
    { name: "34", uv: 70, pv: 258 },
    { name: "35", uv: -25, pv: 359 },
    { name: "36", uv: -59, pv: 192 },
    { name: "37", uv: -63, pv: 464 },
    { name: "38", uv: -91, pv: -2 },
    { name: "39", uv: -66, pv: 154 },
    { name: "40", uv: -50, pv: 186 },
];

export class Barchart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={DATA}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        verticalAlign="top"
                        wrapperStyle={{ lineHeight: "40px" }}
                    />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#8884d8" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export class CustomizedContent extends PureComponent {
    render() {
        const {
            root,
            depth,
            x,
            y,
            width,
            height,
            index,
            payload,
            colors,
            rank,
            name,
        } = this.props;

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                        fill:
                            depth < 2
                                ? colors[
                                      Math.floor(
                                          (index / root.children.length) * 6
                                      )
                                  ]
                                : "#ffffff00",
                        stroke: "#fff",
                        strokeWidth: 2 / (depth + 1e-10),
                        strokeOpacity: 1 / (depth + 1e-10),
                    }}
                />
                {depth === 1 ? (
                    <text
                        x={x + width / 2}
                        y={y + height / 2 + 7}
                        textAnchor="middle"
                        fill="#fff"
                        fontSize={14}
                    >
                        {name}
                    </text>
                ) : null}
                {depth === 1 ? (
                    <text
                        x={x + 4}
                        y={y + 18}
                        fill="#fff"
                        fontSize={16}
                        fillOpacity={0.9}
                    >
                        {index + 1}
                    </text>
                ) : null}
            </g>
        );
    }
}

export class TreemapChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    width={400}
                    height={200}
                    data={data}
                    dataKey="size"
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent colors={COLORS} />}
                />
            </ResponsiveContainer>
        );
    }
}
