'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface InteractiveVisualProps {
  heroVisualType: 'dashboard' | 'workflow' | 'chat' | 'documents' | 'monitor' | 'pipeline' | 'website'
  accentColor: string
  accentColorRGB: string
}

/* ------------------------------------------------------------------ */
/*  SVG sub-components for each visual type                           */
/* ------------------------------------------------------------------ */

function DashboardVisual({ accent, purple }: { accent: string; purple: string }) {
  return (
    <>
      {/* Sidebar */}
      <rect x="20" y="20" width="120" height="360" rx="8" fill={purple} fillOpacity={0.08} stroke={purple} strokeWidth="0.5" strokeOpacity={0.2} />
      <rect x="36" y="44" width="88" height="10" rx="3" fill={purple} fillOpacity={0.15} />
      <rect x="36" y="70" width="60" height="8" rx="2" fill={accent} fillOpacity={0.12} />
      <rect x="36" y="92" width="72" height="8" rx="2" fill={purple} fillOpacity={0.08} />
      <rect x="36" y="114" width="56" height="8" rx="2" fill={purple} fillOpacity={0.08} />
      <rect x="36" y="136" width="68" height="8" rx="2" fill={purple} fillOpacity={0.08} />
      <circle cx="30" cy="74" r="3" fill={accent} fillOpacity={0.5} />
      <circle cx="30" cy="96" r="3" fill={purple} fillOpacity={0.2} />
      <circle cx="30" cy="118" r="3" fill={purple} fillOpacity={0.2} />
      <circle cx="30" cy="140" r="3" fill={purple} fillOpacity={0.2} />

      {/* KPI Cards Row */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`kpi-${i}`}>
          <rect x={164 + i * 156} y="20" width="140" height="70" rx="8" fill={i % 2 === 0 ? accent : purple} fillOpacity={0.06} stroke={i % 2 === 0 ? accent : purple} strokeWidth="0.5" strokeOpacity={0.15} />
          <rect x={180 + i * 156} y="36" width="50" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />
          <rect x={180 + i * 156} y="54" width="80" height="14" rx="3" fill={i % 2 === 0 ? accent : purple} fillOpacity={0.2} />
        </g>
      ))}

      {/* Bar Chart */}
      <rect x="164" y="110" width="300" height="200" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="180" y="126" width="80" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.08} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={`bar-${i}`}
          x={194 + i * 30}
          y={290 - [100, 140, 80, 160, 120, 90, 150, 110][i]}
          width="16"
          height={[100, 140, 80, 160, 120, 90, 150, 110][i]}
          rx="3"
          fill={i % 2 === 0 ? accent : purple}
          fillOpacity={0.25}
        />
      ))}
      <line x1="180" y1="290" x2="450" y2="290" stroke="#F5F5F7" strokeWidth="0.5" strokeOpacity={0.08} />

      {/* Line Chart */}
      <rect x="484" y="110" width="296" height="200" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="500" y="126" width="80" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.08} />
      <path d="M500 280 L540 250 L580 260 L620 220 L660 210 L700 180 L740 190" stroke={accent} strokeWidth="1.5" fill="none" strokeOpacity={0.6} />
      <path d="M500 270 L540 260 L580 250 L620 240 L660 230 L700 220 L740 215" stroke={purple} strokeWidth="1.5" fill="none" strokeOpacity={0.4} />
      {[500, 580, 660, 740].map((x, i) => (
        <circle key={`dot-${i}`} cx={x} cy={[280, 260, 210, 190][i]} r="3" fill={accent} fillOpacity={0.6} />
      ))}

      {/* Data Table */}
      <rect x="164" y="330" width="300" height="50" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      {[0, 1, 2].map((row) => (
        <g key={`row-${row}`}>
          <rect x="180" y={342 + row * 12} width="40" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
          <rect x="240" y={342 + row * 12} width="60" height="6" rx="1" fill={accent} fillOpacity={0.1} />
          <rect x="320" y={342 + row * 12} width="30" height="6" rx="1" fill={purple} fillOpacity={0.08} />
        </g>
      ))}

      {/* Pie Chart */}
      <rect x="484" y="330" width="296" height="50" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <circle cx="524" cy="355" r="16" fill="none" stroke={accent} strokeWidth="3" strokeOpacity={0.3} strokeDasharray="60 40" />
      <circle cx="524" cy="355" r="16" fill="none" stroke={purple} strokeWidth="3" strokeOpacity={0.3} strokeDasharray="30 70" strokeDashoffset="-60" />
      <rect x="556" y="348" width="50" height="5" rx="1" fill={accent} fillOpacity={0.12} />
      <rect x="556" y="358" width="40" height="5" rx="1" fill={purple} fillOpacity={0.12} />
    </>
  )
}

function WorkflowVisual({ accent, purple }: { accent: string; purple: string }) {
  const nodes = [
    { x: 80, y: 80, label: 'Trigger', w: 100 },
    { x: 80, y: 200, label: 'Validar', w: 100 },
    { x: 80, y: 320, label: 'Notificar', w: 100 },
    { x: 300, y: 80, label: 'Processar', w: 120 },
    { x: 300, y: 200, label: 'Transformar', w: 120 },
    { x: 300, y: 320, label: 'Salvar', w: 120 },
    { x: 540, y: 140, label: 'API Output', w: 120 },
    { x: 540, y: 280, label: 'Dashboard', w: 120 },
    { x: 720, y: 200, label: 'Entrega', w: 100 },
  ]

  const connections = [
    [0, 3], [1, 4], [2, 5], [0, 1], [3, 4], [4, 5],
    [3, 6], [5, 7], [6, 8], [7, 8], [1, 4],
  ]

  return (
    <>
      {/* Grid background */}
      <defs>
        <pattern id="wf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={purple} strokeWidth="0.3" strokeOpacity={0.08} />
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#wf-grid)" />

      {/* Connections */}
      {connections.map(([from, to], i) => {
        const f = nodes[from]
        const t = nodes[to]
        return (
          <line
            key={`conn-${i}`}
            x1={f.x + f.w / 2}
            y1={f.y + 20}
            x2={t.x + t.w / 2}
            y2={t.y + 20}
            stroke={i % 2 === 0 ? accent : purple}
            strokeWidth="1"
            strokeOpacity={0.2}
            strokeDasharray={i % 3 === 0 ? '6 4' : 'none'}
          />
        )
      })}

      {/* Arrow heads on some connections */}
      {[[3, 6], [5, 7], [6, 8], [7, 8]].map(([from, to], i) => {
        const f = nodes[from]
        const t = nodes[to]
        const mx = (f.x + f.w / 2 + t.x + t.w / 2) / 2
        const my = (f.y + 20 + t.y + 20) / 2
        return (
          <circle key={`arrow-${i}`} cx={mx} cy={my} r="3" fill={accent} fillOpacity={0.4} />
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height="40"
            rx="8"
            fill={i % 3 === 0 ? accent : purple}
            fillOpacity={0.08}
            stroke={i % 3 === 0 ? accent : purple}
            strokeWidth="0.8"
            strokeOpacity={0.25}
          />
          {/* Icon placeholder */}
          <circle cx={node.x + 18} cy={node.y + 20} r="6" fill={i % 3 === 0 ? accent : purple} fillOpacity={0.2} />
          {/* Label */}
          <rect x={node.x + 30} y={node.y + 15} width={node.w - 44} height="8" rx="2" fill="#F5F5F7" fillOpacity={0.12} />
        </g>
      ))}

      {/* Status indicators */}
      <circle cx={nodes[0].x + nodes[0].w - 8} cy={nodes[0].y + 8} r="4" fill="#00D4AA" fillOpacity={0.7} />
      <circle cx={nodes[3].x + nodes[3].w - 8} cy={nodes[3].y + 8} r="4" fill="#00D4AA" fillOpacity={0.7} />
      <circle cx={nodes[8].x + nodes[8].w - 8} cy={nodes[8].y + 8} r="4" fill={accent} fillOpacity={0.7} />

      {/* Branch label */}
      <rect x="410" y="95" width="60" height="20" rx="10" fill={accent} fillOpacity={0.1} stroke={accent} strokeWidth="0.5" strokeOpacity={0.2} />
      <rect x="420" y="102" width="40" height="6" rx="1" fill={accent} fillOpacity={0.2} />
    </>
  )
}

function ChatVisual({ accent, purple }: { accent: string; purple: string }) {
  return (
    <>
      {/* Chat container */}
      <rect x="40" y="20" width="480" height="360" rx="12" fill={purple} fillOpacity={0.06} stroke={purple} strokeWidth="0.5" strokeOpacity={0.15} />

      {/* Chat header */}
      <rect x="40" y="20" width="480" height="50" rx="12" fill={purple} fillOpacity={0.08} />
      <rect x="40" y="58" width="480" height="12" rx="0" fill={purple} fillOpacity={0.08} />
      <circle cx="72" cy="45" r="14" fill={accent} fillOpacity={0.15} stroke={accent} strokeWidth="0.5" strokeOpacity={0.3} />
      <rect x="96" y="38" width="80" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.12} />
      <circle cx="96" cy="54" r="3" fill="#00D4AA" fillOpacity={0.6} />
      <rect x="104" y="50" width="40" height="6" rx="1" fill="#00D4AA" fillOpacity={0.1} />

      {/* User message */}
      <rect x="260" y="90" width="240" height="46" rx="12" fill={accent} fillOpacity={0.12} stroke={accent} strokeWidth="0.5" strokeOpacity={0.15} />
      <rect x="276" y="102" width="180" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.15} />
      <rect x="276" y="116" width="120" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.1} />

      {/* Bot message */}
      <rect x="60" y="152" width="300" height="70" rx="12" fill={purple} fillOpacity={0.1} stroke={purple} strokeWidth="0.5" strokeOpacity={0.15} />
      <rect x="76" y="166" width="260" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.12} />
      <rect x="76" y="180" width="220" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="76" y="194" width="180" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.08} />
      <rect x="76" y="208" width="100" height="6" rx="1" fill={accent} fillOpacity={0.15} />

      {/* User message 2 */}
      <rect x="300" y="240" width="200" height="36" rx="12" fill={accent} fillOpacity={0.12} stroke={accent} strokeWidth="0.5" strokeOpacity={0.15} />
      <rect x="316" y="252" width="160" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.15} />

      {/* Typing indicator */}
      <rect x="60" y="294" width="90" height="36" rx="12" fill={purple} fillOpacity={0.08} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <circle cx="86" cy="312" r="4" fill={accent} fillOpacity={0.3} />
      <circle cx="102" cy="312" r="4" fill={accent} fillOpacity={0.5} />
      <circle cx="118" cy="312" r="4" fill={accent} fillOpacity={0.3} />

      {/* Input bar */}
      <rect x="56" y="346" width="448" height="20" rx="10" fill={purple} fillOpacity={0.06} stroke={purple} strokeWidth="0.5" strokeOpacity={0.1} />
      <rect x="72" y="352" width="80" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      {/* Knowledge panel (right side) */}
      <rect x="560" y="20" width="200" height="360" rx="12" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="576" y="40" width="100" height="8" rx="2" fill={accent} fillOpacity={0.15} />

      {/* Knowledge cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`knowledge-${i}`}>
          <rect x="576" y={68 + i * 72} width="168" height="56" rx="6" fill={purple} fillOpacity={0.06} stroke={purple} strokeWidth="0.5" strokeOpacity={0.1} />
          <rect x="588" y={80 + i * 72} width="100" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.1} />
          <rect x="588" y={92 + i * 72} width="140" height="5" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
          <rect x="588" y={104 + i * 72} width="80" height="5" rx="1" fill="#F5F5F7" fillOpacity={0.04} />
          <rect x="700" y={78 + i * 72} width="30" height="12" rx="6" fill={accent} fillOpacity={i === 0 ? 0.2 : 0.08} />
        </g>
      ))}

      {/* Search icon in panel */}
      <circle cx="740" cy="44" r="8" fill="none" stroke={accent} strokeWidth="1" strokeOpacity={0.3} />
      <line x1="746" y1="50" x2="750" y2="54" stroke={accent} strokeWidth="1" strokeOpacity={0.3} />
    </>
  )
}

function DocumentsVisual({ accent, purple }: { accent: string; purple: string }) {
  return (
    <>
      {/* Before label */}
      <rect x="40" y="20" width="70" height="22" rx="6" fill={purple} fillOpacity={0.1} stroke={purple} strokeWidth="0.5" strokeOpacity={0.2} />
      <rect x="52" y="27" width="46" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.12} />

      {/* Original document */}
      <rect x="40" y="56" width="300" height="320" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.15} />

      {/* Document header */}
      <rect x="60" y="76" width="180" height="10" rx="2" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="60" y="96" width="260" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="108" width="240" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="120" width="200" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      {/* Highlight overlays on original */}
      <rect x="56" y="140" width="270" height="24" rx="4" fill={accent} fillOpacity={0.08} stroke={accent} strokeWidth="0.8" strokeOpacity={0.2} strokeDasharray="4 2" />
      <rect x="60" y="146" width="250" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="156" width="180" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      <rect x="60" y="176" width="260" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="188" width="220" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      <rect x="56" y="204" width="270" height="24" rx="4" fill={purple} fillOpacity={0.08} stroke={purple} strokeWidth="0.8" strokeOpacity={0.2} strokeDasharray="4 2" />
      <rect x="60" y="210" width="240" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="222" width="200" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      <rect x="60" y="242" width="260" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="254" width="240" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="266" width="180" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      <rect x="56" y="282" width="270" height="24" rx="4" fill={accent} fillOpacity={0.08} stroke={accent} strokeWidth="0.8" strokeOpacity={0.2} strokeDasharray="4 2" />
      <rect x="60" y="288" width="260" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="60" y="300" width="190" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />

      {/* Arrow between sections */}
      <path d="M370 200 L420 200" stroke={accent} strokeWidth="1.5" strokeOpacity={0.4} />
      <path d="M416 194 L424 200 L416 206" stroke={accent} strokeWidth="1.5" strokeOpacity={0.4} fill="none" />
      {/* Processing icon */}
      <circle cx="395" cy="186" r="10" fill={accent} fillOpacity={0.1} stroke={accent} strokeWidth="0.8" strokeOpacity={0.25} />

      {/* After label */}
      <rect x="460" y="20" width="70" height="22" rx="6" fill={accent} fillOpacity={0.12} stroke={accent} strokeWidth="0.5" strokeOpacity={0.25} />
      <rect x="472" y="27" width="46" height="6" rx="1" fill={accent} fillOpacity={0.25} />

      {/* Extracted data panel */}
      <rect x="460" y="56" width="300" height="320" rx="8" fill={accent} fillOpacity={0.03} stroke={accent} strokeWidth="0.5" strokeOpacity={0.15} />

      {/* Extracted fields */}
      {[
        { y: 76, labelW: 70, valueW: 140, a: true },
        { y: 110, labelW: 80, valueW: 120, a: false },
        { y: 144, labelW: 60, valueW: 160, a: true },
        { y: 178, labelW: 90, valueW: 100, a: false },
        { y: 212, labelW: 70, valueW: 130, a: true },
        { y: 246, labelW: 85, valueW: 110, a: false },
      ].map((field, i) => (
        <g key={`field-${i}`}>
          <rect x="480" y={field.y} width={260} height="24" rx="4" fill={field.a ? accent : purple} fillOpacity={0.04} />
          <rect x="492" y={field.y + 4} width={field.labelW} height="6" rx="1" fill="#F5F5F7" fillOpacity={0.1} />
          <rect x="492" y={field.y + 14} width={field.valueW} height="6" rx="1" fill={field.a ? accent : purple} fillOpacity={0.15} />
          {/* Confidence badge */}
          <rect x={700} y={field.y + 4} width="28" height="14" rx="7" fill={accent} fillOpacity={0.12} />
        </g>
      ))}

      {/* Summary bar */}
      <rect x="476" y="290" width="268" height="70" rx="6" fill={accent} fillOpacity={0.06} stroke={accent} strokeWidth="0.5" strokeOpacity={0.1} />
      <rect x="492" y="304" width="80" height="6" rx="1" fill={accent} fillOpacity={0.15} />
      <rect x="492" y="318" width="220" height="5" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
      <rect x="492" y="330" width="180" height="5" rx="1" fill="#F5F5F7" fillOpacity={0.05} />
      <rect x="492" y="342" width="140" height="5" rx="1" fill="#F5F5F7" fillOpacity={0.04} />
    </>
  )
}

function MonitorVisual({ accent, purple }: { accent: string; purple: string }) {
  return (
    <>
      {/* Top bar */}
      <rect x="20" y="16" width="760" height="36" rx="8" fill={purple} fillOpacity={0.06} stroke={purple} strokeWidth="0.5" strokeOpacity={0.1} />
      <rect x="36" y="28" width="80" height="8" rx="2" fill={accent} fillOpacity={0.15} />
      <circle cx="740" cy="34" r="6" fill="#00D4AA" fillOpacity={0.4} />
      <circle cx="720" cy="34" r="6" fill={accent} fillOpacity={0.3} />

      {/* Price grid */}
      <rect x="20" y="66" width="480" height="200" rx="8" fill={purple} fillOpacity={0.04} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="36" y="80" width="100" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />

      {/* Table header */}
      <rect x="36" y="100" width="448" height="20" rx="0" fill={purple} fillOpacity={0.06} />
      {['Produto', 'Preco', 'Variacao', 'Status'].map((_, i) => (
        <rect key={`th-${i}`} x={44 + i * 112} y={106} width={[60, 50, 60, 40][i]} height="6" rx="1" fill="#F5F5F7" fillOpacity={0.1} />
      ))}

      {/* Table rows */}
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={`tr-${row}`}>
          <line x1="36" y1={130 + row * 24} x2="484" y2={130 + row * 24} stroke={purple} strokeWidth="0.3" strokeOpacity={0.1} />
          <rect x="44" y={134 + row * 24} width={[80, 70, 60, 90, 50][row]} height="6" rx="1" fill="#F5F5F7" fillOpacity={0.08} />
          <rect x="156" y={134 + row * 24} width="50" height="6" rx="1" fill={accent} fillOpacity={0.15} />
          <rect x="268" y={134 + row * 24} width="40" height="6" rx="1" fill={row % 2 === 0 ? '#00D4AA' : '#FF6B6B'} fillOpacity={0.2} />
          <circle cx="396" cy={137 + row * 24} r="4" fill={row === 1 ? '#FF6B6B' : '#00D4AA'} fillOpacity={0.4} />
        </g>
      ))}

      {/* Trend graph */}
      <rect x="520" y="66" width="260" height="200" rx="8" fill={purple} fillOpacity={0.04} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="536" y="80" width="80" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />

      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={`grid-${i}`} x1="536" y1={115 + i * 35} x2="764" y2={115 + i * 35} stroke={purple} strokeWidth="0.3" strokeOpacity={0.08} />
      ))}

      {/* Trend line 1 */}
      <path d="M540 220 L570 200 L600 210 L630 180 L660 170 L690 150 L720 140 L750 120" stroke={accent} strokeWidth="1.5" fill="none" strokeOpacity={0.5} />
      <path d="M540 220 L570 200 L600 210 L630 180 L660 170 L690 150 L720 140 L750 120 L750 250 L540 250 Z" fill={accent} fillOpacity={0.04} />

      {/* Trend line 2 */}
      <path d="M540 230 L570 225 L600 230 L630 215 L660 220 L690 205 L720 200 L750 190" stroke={purple} strokeWidth="1" fill="none" strokeOpacity={0.3} strokeDasharray="4 3" />

      {/* Alert panel */}
      <rect x="20" y="282" width="480" height="100" rx="8" fill={purple} fillOpacity={0.04} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="36" y="296" width="60" height="8" rx="2" fill="#FF6B6B" fillOpacity={0.2} />

      {/* Alert items */}
      {[0, 1, 2].map((i) => (
        <g key={`alert-${i}`}>
          <circle cx="44" cy={322 + i * 18} r="3" fill={['#FF6B6B', accent, '#FFB347'][i]} fillOpacity={0.5} />
          <rect x="56" y={319 + i * 18} width={[200, 160, 180][i]} height="6" rx="1" fill="#F5F5F7" fillOpacity={0.08} />
          <rect x="420" y={319 + i * 18} width="40" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
        </g>
      ))}

      {/* Stats cards bottom right */}
      <rect x="520" y="282" width="124" height="100" rx="8" fill={accent} fillOpacity={0.05} stroke={accent} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="536" y="300" width="60" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.08} />
      <rect x="536" y="320" width="80" height="14" rx="3" fill={accent} fillOpacity={0.2} />
      <rect x="536" y="348" width="50" height="6" rx="1" fill="#00D4AA" fillOpacity={0.2} />

      <rect x="656" y="282" width="124" height="100" rx="8" fill={purple} fillOpacity={0.05} stroke={purple} strokeWidth="0.5" strokeOpacity={0.12} />
      <rect x="672" y="300" width="60" height="6" rx="1" fill="#F5F5F7" fillOpacity={0.08} />
      <rect x="672" y="320" width="80" height="14" rx="3" fill={purple} fillOpacity={0.2} />
      <rect x="672" y="348" width="50" height="6" rx="1" fill="#FF6B6B" fillOpacity={0.2} />
    </>
  )
}

function PipelineVisual({ accent, purple }: { accent: string; purple: string }) {
  const stages = [
    { x: 30, label: 'Fontes', items: ['API REST', 'Database', 'CSV/Excel', 'Webhook'] },
    { x: 220, label: 'Ingestao', items: ['Validacao', 'Parsing', 'Dedup'] },
    { x: 410, label: 'Transformacao', items: ['Limpeza', 'Enriquecimento', 'Agregacao'] },
    { x: 600, label: 'Saida', items: ['PostgreSQL', 'API', 'Dashboard'] },
  ]

  return (
    <>
      {/* Background grid */}
      <defs>
        <pattern id="pl-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={purple} strokeWidth="0.3" strokeOpacity={0.06} />
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#pl-grid)" />

      {/* Stage columns */}
      {stages.map((stage, si) => (
        <g key={`stage-${si}`}>
          {/* Stage header */}
          <rect x={stage.x} y="24" width="160" height="30" rx="8" fill={si % 2 === 0 ? accent : purple} fillOpacity={0.1} stroke={si % 2 === 0 ? accent : purple} strokeWidth="0.8" strokeOpacity={0.2} />
          <rect x={stage.x + 16} y="34" width="80" height="8" rx="2" fill={si % 2 === 0 ? accent : purple} fillOpacity={0.25} />

          {/* Stage items */}
          {stage.items.map((_, ii) => (
            <g key={`item-${si}-${ii}`}>
              <rect
                x={stage.x}
                y={80 + ii * 76}
                width="160"
                height="56"
                rx="8"
                fill={purple}
                fillOpacity={0.05}
                stroke={si % 2 === 0 ? accent : purple}
                strokeWidth="0.5"
                strokeOpacity={0.12}
              />
              {/* Icon */}
              <rect x={stage.x + 14} y={94 + ii * 76} width="28" height="28" rx="6" fill={si % 2 === 0 ? accent : purple} fillOpacity={0.1} />
              {/* Label */}
              <rect x={stage.x + 52} y={100 + ii * 76} width={[60, 70, 55, 65][ii % 4]} height="7" rx="1" fill="#F5F5F7" fillOpacity={0.12} />
              <rect x={stage.x + 52} y={112 + ii * 76} width={[80, 60, 70, 50][ii % 4]} height="5" rx="1" fill="#F5F5F7" fillOpacity={0.06} />
              {/* Status dot */}
              <circle cx={stage.x + 146} cy={94 + ii * 76} r="3" fill="#00D4AA" fillOpacity={0.5} />
            </g>
          ))}
        </g>
      ))}

      {/* Flow arrows between stages */}
      {[0, 1, 2].map((i) => {
        const x1 = stages[i].x + 160
        const x2 = stages[i + 1].x
        const midX = (x1 + x2) / 2
        return (
          <g key={`flow-${i}`}>
            {/* Multiple connecting lines */}
            {[0, 1, 2].map((j) => (
              <path
                key={`fline-${i}-${j}`}
                d={`M${x1} ${108 + j * 76} Q${midX} ${108 + j * 76} ${x2} ${108 + Math.min(j, stages[i + 1].items.length - 1) * 76}`}
                stroke={i % 2 === 0 ? accent : purple}
                strokeWidth="0.8"
                strokeOpacity={0.2}
                fill="none"
              />
            ))}
            {/* Animated dot placeholder */}
            <circle cx={midX} cy={108 + 76} r="4" fill={accent} fillOpacity={0.4} />
            <circle cx={midX} cy={108 + 76} r="8" fill={accent} fillOpacity={0.1} />
          </g>
        )
      })}

      {/* Throughput indicator */}
      <rect x="300" y="360" width="200" height="26" rx="13" fill={accent} fillOpacity={0.06} stroke={accent} strokeWidth="0.5" strokeOpacity={0.15} />
      <rect x="320" y="370" width="100" height="6" rx="1" fill={accent} fillOpacity={0.15} />
      <rect x="430" y="370" width="50" height="6" rx="1" fill="#00D4AA" fillOpacity={0.2} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual selector                                                    */
/* ------------------------------------------------------------------ */

function WebsiteVisual({ accent }: { accent: string; purple: string }) {
  const gold = '#D4A843'
  const olive = '#6B7F4A'
  const sand = '#FBF9F5'
  return (
    <>
      {/* Browser chrome */}
      <rect x="20" y="10" width="760" height="380" rx="12" fill="#1a1a2e" stroke={accent} strokeWidth="0.5" strokeOpacity={0.3} />
      <rect x="20" y="10" width="760" height="36" rx="12" fill={accent} fillOpacity={0.06} />
      <rect x="20" y="36" width="760" height="10" fill={accent} fillOpacity={0.06} />
      <circle cx="42" cy="28" r="5" fill="#FF5F57" fillOpacity={0.6} />
      <circle cx="58" cy="28" r="5" fill="#FFBD2E" fillOpacity={0.6} />
      <circle cx="74" cy="28" r="5" fill="#28CA41" fillOpacity={0.6} />
      <rect x="120" y="18" width="400" height="20" rx="10" fill="#F5F5F7" fillOpacity={0.04} />
      <rect x="140" y="24" width="240" height="8" rx="3" fill="#F5F5F7" fillOpacity={0.08} />

      {/* Navbar */}
      <rect x="28" y="50" width="744" height="36" fill={sand} fillOpacity={0.04} />
      <rect x="48" y="58" width="100" height="16" rx="4" fill={gold} fillOpacity={0.4} />
      {/* Nav links */}
      <rect x="480" y="64" width="50" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="548" y="64" width="50" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="616" y="64" width="50" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="684" y="60" width="70" height="16" rx="6" fill={olive} fillOpacity={0.4} />

      {/* Hero section */}
      <rect x="28" y="90" width="744" height="140" fill={gold} fillOpacity={0.02} />

      {/* Gold divider */}
      <rect x="56" y="105" width="50" height="3" rx="1.5" fill={gold} fillOpacity={0.5} />
      {/* Headline */}
      <rect x="56" y="118" width="280" height="16" rx="4" fill={gold} fillOpacity={0.35} />
      <rect x="56" y="142" width="220" height="10" rx="3" fill="#F5F5F7" fillOpacity={0.1} />
      <rect x="56" y="158" width="260" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.07} />
      <rect x="56" y="172" width="180" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.05} />

      {/* CTA buttons */}
      <rect x="56" y="192" width="100" height="24" rx="8" fill={olive} fillOpacity={0.4} />
      <rect x="56" y="200" width="100" height="8" rx="0" fill={olive} fillOpacity={0.4} />
      <rect x="172" y="192" width="100" height="24" rx="8" fill="transparent" stroke={gold} strokeWidth="1" strokeOpacity={0.35} />

      {/* Hero image area */}
      <rect x="500" y="100" width="255" height="120" rx="12" fill={gold} fillOpacity={0.05} stroke={gold} strokeWidth="0.5" strokeOpacity={0.15} />
      <rect x="514" y="112" width="227" height="80" rx="8" fill={sand} fillOpacity={0.04} />
      <circle cx="627" cy="152" r="25" fill={gold} fillOpacity={0.08} />
      <rect x="514" y="200" width="80" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.08} />
      <rect x="690" y="200" width="50" height="8" rx="2" fill={gold} fillOpacity={0.15} />

      {/* Section divider */}
      <rect x="56" y="242" width="30" height="3" rx="1.5" fill={gold} fillOpacity={0.5} />
      <rect x="56" y="252" width="120" height="10" rx="3" fill={gold} fillOpacity={0.25} />
      <rect x="56" y="268" width="180" height="6" rx="2" fill="#F5F5F7" fillOpacity={0.06} />

      {/* Property cards */}
      {[
        { x: 44, w: 220 },
        { x: 284, w: 220 },
        { x: 524, w: 220 },
      ].map((card, i) => (
        <g key={`card-${i}`}>
          <rect x={card.x} y="284" width={card.w} height="96" rx="10" fill="#F5F5F7" fillOpacity={0.02} stroke={accent} strokeWidth="0.5" strokeOpacity={0.1} />
          {/* Image */}
          <rect x={card.x} y="284" width={card.w} height="46" rx="10" fill={i % 2 === 0 ? gold : olive} fillOpacity={0.05} />
          <rect x={card.x} y="322" width={card.w} height="8" rx="0" fill={i % 2 === 0 ? gold : olive} fillOpacity={0.05} />
          {/* Badge */}
          <rect x={card.x + 10} y="292" width="50" height="14" rx="5" fill={olive} fillOpacity={0.25} />
          {/* Title */}
          <rect x={card.x + 14} y="340" width="120" height="8" rx="2" fill="#F5F5F7" fillOpacity={0.12} />
          <rect x={card.x + 14} y="354" width="80" height="6" rx="1.5" fill="#F5F5F7" fillOpacity={0.06} />
          {/* Price + CTA */}
          <rect x={card.x + 14} y="366" width="90" height="8" rx="2" fill={gold} fillOpacity={0.3} />
          <rect x={card.x + 160} y="366" width="46" height="8" rx="4" fill={olive} fillOpacity={0.25} />
        </g>
      ))}

      {/* WhatsApp float */}
      <circle cx="740" cy="370" r="14" fill="#25D366" fillOpacity={0.5} />
    </>
  )
}

function VisualContent({ type, accent, purple }: { type: InteractiveVisualProps['heroVisualType']; accent: string; purple: string }) {
  switch (type) {
    case 'dashboard':
      return <DashboardVisual accent={accent} purple={purple} />
    case 'workflow':
      return <WorkflowVisual accent={accent} purple={purple} />
    case 'chat':
      return <ChatVisual accent={accent} purple={purple} />
    case 'documents':
      return <DocumentsVisual accent={accent} purple={purple} />
    case 'monitor':
      return <MonitorVisual accent={accent} purple={purple} />
    case 'pipeline':
      return <PipelineVisual accent={accent} purple={purple} />
    case 'website':
      return <WebsiteVisual accent={accent} purple={purple} />
  }
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function InteractiveVisual({ heroVisualType, accentColor, accentColorRGB }: InteractiveVisualProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="section-divider mb-24 md:mb-36" />

      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
          >
            VISUALIZACAO INTERATIVA
          </motion.span>
        </div>

        {/* Visual container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="glass rounded-2xl p-4 md:p-8 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60%] h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: accentColor, opacity: 0.06 }}
          />
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[40%] h-32 rounded-full blur-3xl pointer-events-none"
            style={{ background: '#6C63FF', opacity: 0.04 }}
          />

          {/* Top border glow */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}55, transparent)`,
            }}
          />

          {/* SVG Visual */}
          <motion.svg
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease }}
          >
            <VisualContent type={heroVisualType} accent={accentColor} purple="#6C63FF" />
          </motion.svg>

          {/* Subtle scan line animation */}
          {inView && (
            <motion.div
              className="absolute left-0 right-0 h-[1px] pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(${accentColorRGB}, 0.15), transparent)`,
              }}
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 3, delay: 1, ease: 'linear', repeat: Infinity, repeatDelay: 5 }}
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
