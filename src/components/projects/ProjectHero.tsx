'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ProjectHeroProps {
  title: string
  subtitle: string
  categoryLabel: string
  status: string
  statusType: 'done' | 'active'
  accentColor: string
  accentColorRGB: string
  techs: { name: string; role: string }[]
  heroVisualType:
    | 'dashboard'
    | 'workflow'
    | 'chat'
    | 'documents'
    | 'monitor'
    | 'pipeline'
    | 'website'
}

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.12, duration: 0.9, ease },
  }),
}

const floatY = (delay: number, duration = 4) => ({
  y: [0, -6, 0],
  transition: { delay, duration, repeat: Infinity, ease: 'easeInOut' as const },
})

const floatX = (delay: number, duration = 5) => ({
  x: [0, 5, 0],
  transition: { delay, duration, repeat: Infinity, ease: 'easeInOut' as const },
})

const pulseOpacity = (delay: number) => ({
  opacity: [0.5, 1, 0.5],
  transition: { delay, duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
})

/* ------------------------------------------------------------------ */
/*  Visual: Dashboard                                                  */
/* ------------------------------------------------------------------ */

function DashboardVisual({ accent, secondary }: { accent: string; secondary: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Grid lines */}
      {[80, 130, 180, 230].map((y) => (
        <motion.line
          key={`grid-${y}`}
          x1="30" y1={y} x2="370" y2={y}
          stroke={accent} strokeWidth="0.4" opacity="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      ))}

      {/* KPI box top-left */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease }}
      >
        <rect x="30" y="20" width="110" height="50" rx="6" stroke={accent} strokeWidth="0.6" opacity="0.25" fill={accent} fillOpacity="0.03" />
        <rect x="42" y="32" width="40" height="6" rx="2" fill={accent} fillOpacity="0.35" />
        <rect x="42" y="44" width="24" height="4" rx="1.5" fill={accent} fillOpacity="0.15" />
        <motion.text x="100" y="52" fill={accent} fontSize="14" fontFamily="monospace" opacity="0.6"
          animate={pulseOpacity(1.5)}
        >
          +24%
        </motion.text>
      </motion.g>

      {/* KPI box top-right */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.8, ease }}
      >
        <rect x="160" y="20" width="110" height="50" rx="6" stroke={secondary} strokeWidth="0.6" opacity="0.25" fill={secondary} fillOpacity="0.03" />
        <rect x="172" y="32" width="50" height="6" rx="2" fill={secondary} fillOpacity="0.35" />
        <rect x="172" y="44" width="30" height="4" rx="1.5" fill={secondary} fillOpacity="0.15" />
        <motion.text x="240" y="52" fill={secondary} fontSize="12" fontFamily="monospace" opacity="0.5"
          animate={pulseOpacity(2)}
        >
          98.7%
        </motion.text>
      </motion.g>

      {/* KPI box top-far-right */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease }}
      >
        <rect x="290" y="20" width="80" height="50" rx="6" stroke={accent} strokeWidth="0.6" opacity="0.2" fill={accent} fillOpacity="0.03" />
        <rect x="302" y="32" width="30" height="6" rx="2" fill={accent} fillOpacity="0.25" />
        <rect x="302" y="44" width="20" height="4" rx="1.5" fill={accent} fillOpacity="0.12" />
      </motion.g>

      {/* Bar chart */}
      {[
        { x: 50,  h: 80, color: accent, delay: 1.0 },
        { x: 90,  h: 55, color: secondary, delay: 1.1 },
        { x: 130, h: 100, color: accent, delay: 1.2 },
        { x: 170, h: 65, color: secondary, delay: 1.3 },
        { x: 210, h: 90, color: accent, delay: 1.4 },
        { x: 250, h: 40, color: secondary, delay: 1.5 },
      ].map((bar) => (
        <motion.rect
          key={`bar-${bar.x}`}
          x={bar.x} y={240 - bar.h} width="28" height={bar.h} rx="4"
          fill={bar.color} fillOpacity="0.2"
          stroke={bar.color} strokeWidth="0.5" opacity="0.6"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: bar.delay, duration: 0.7, ease }}
          style={{ transformOrigin: `${bar.x + 14}px 240px` }}
        />
      ))}

      {/* Pie chart segment */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8, ease }}
        style={{ transformOrigin: '335px 180px' }}
      >
        <circle cx="335" cy="180" r="40" stroke={accent} strokeWidth="0.5" opacity="0.15" fill="none" />
        <motion.path
          d="M335 140 A40 40 0 0 1 370 195"
          stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease }}
        />
        <motion.path
          d="M370 195 A40 40 0 0 1 310 210"
          stroke={secondary} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.8, duration: 0.9, ease }}
        />
        <circle cx="335" cy="180" r="22" stroke={accent} strokeWidth="0.3" opacity="0.1" fill="none" />
      </motion.g>

      {/* Trend line */}
      <motion.path
        d="M50 250 Q100 230 150 245 Q200 260 250 235 Q300 210 350 225"
        stroke={accent} strokeWidth="1.5" fill="none" opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.6, duration: 1.5, ease }}
      />
      <motion.circle cx="350" cy="225" r="3" fill={accent} opacity="0.6"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Workflow                                                    */
/* ------------------------------------------------------------------ */

function WorkflowVisual({ accent, secondary }: { accent: string; secondary: string }) {
  const nodes = [
    { cx: 60, cy: 80, label: 'CRM', color: accent },
    { cx: 200, cy: 50, label: 'n8n', color: secondary },
    { cx: 340, cy: 80, label: 'ERP', color: accent },
    { cx: 60, cy: 200, label: 'Email', color: secondary },
    { cx: 200, cy: 250, label: 'API', color: accent },
    { cx: 340, cy: 200, label: 'DB', color: secondary },
    { cx: 200, cy: 150, label: 'Hub', color: accent },
  ]

  const edges = [
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
    [6, 1], [6, 4],
  ]

  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Connection lines */}
      {edges.map(([from, to], i) => (
        <motion.line
          key={`edge-${i}`}
          x1={nodes[from].cx} y1={nodes[from].cy}
          x2={nodes[to].cx} y2={nodes[to].cy}
          stroke={accent} strokeWidth="0.8" opacity="0.15"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease }}
        />
      ))}

      {/* Animated flow particles */}
      {edges.slice(0, 6).map(([from, to], i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2" fill={accent} opacity="0.6"
          initial={{ cx: nodes[from].cx, cy: nodes[from].cy, opacity: 0 }}
          animate={{
            cx: [nodes[from].cx, nodes[to].cx],
            cy: [nodes[from].cy, nodes[to].cy],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            delay: 2 + i * 0.5,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, ...floatY(i * 0.3, 4 + i * 0.5) }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease }}
          style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
        >
          <rect
            x={node.cx - 30} y={node.cy - 18} width="60" height="36" rx="8"
            stroke={node.color} strokeWidth="0.7" opacity="0.35"
            fill={node.color} fillOpacity="0.06"
          />
          <text
            x={node.cx} y={node.cy + 4}
            textAnchor="middle" fill={node.color}
            fontSize="10" fontFamily="monospace" opacity="0.7"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Arrow heads on central hub */}
      <motion.polygon
        points="188,150 195,145 195,155"
        fill={accent} opacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Chat                                                       */
/* ------------------------------------------------------------------ */

function ChatVisual({ accent, secondary }: { accent: string; secondary: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* AI Brain icon center */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease }}
        style={{ transformOrigin: '200px 130px' }}
      >
        <circle cx="200" cy="130" r="35" stroke={accent} strokeWidth="0.7" opacity="0.3" fill={accent} fillOpacity="0.04" />
        <circle cx="200" cy="130" r="50" stroke={accent} strokeWidth="0.4" opacity="0.12" fill="none" strokeDasharray="3 4" />
        <circle cx="200" cy="130" r="65" stroke={secondary} strokeWidth="0.3" opacity="0.08" fill="none" />
        {/* Brain connections */}
        <motion.path
          d="M185 120 Q192 110 200 118 Q208 110 215 120"
          stroke={accent} strokeWidth="1.2" fill="none" opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.8, ease }}
        />
        <motion.path
          d="M185 135 Q192 145 200 137 Q208 145 215 135"
          stroke={accent} strokeWidth="1.2" fill="none" opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
        />
        <motion.circle cx="200" cy="128" r="4" fill={accent} opacity="0.6"
          animate={pulseOpacity(1.5)}
        />
      </motion.g>

      {/* Chat bubble left (user) */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, ...floatY(0.2, 5) }}
        transition={{ delay: 0.8, duration: 0.7, ease }}
      >
        <rect x="30" y="35" width="120" height="45" rx="12" stroke={secondary} strokeWidth="0.6" opacity="0.3" fill={secondary} fillOpacity="0.05" />
        <rect x="44" y="48" width="55" height="5" rx="2" fill={secondary} fillOpacity="0.25" />
        <rect x="44" y="58" width="35" height="5" rx="2" fill={secondary} fillOpacity="0.15" />
        <polygon points="110,80 120,80 115,90" fill={secondary} fillOpacity="0.05" stroke={secondary} strokeWidth="0.4" opacity="0.3" />
      </motion.g>

      {/* Chat bubble right (AI) */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, ...floatY(0.5, 5.5) }}
        transition={{ delay: 1.1, duration: 0.7, ease }}
      >
        <rect x="250" y="40" width="130" height="55" rx="12" stroke={accent} strokeWidth="0.6" opacity="0.3" fill={accent} fillOpacity="0.05" />
        <rect x="264" y="52" width="70" height="5" rx="2" fill={accent} fillOpacity="0.25" />
        <rect x="264" y="62" width="50" height="5" rx="2" fill={accent} fillOpacity="0.15" />
        <rect x="264" y="72" width="80" height="5" rx="2" fill={accent} fillOpacity="0.1" />
        <polygon points="290,95 280,95 285,105" fill={accent} fillOpacity="0.05" stroke={accent} strokeWidth="0.4" opacity="0.3" />
      </motion.g>

      {/* Knowledge base blocks */}
      {[
        { x: 40, y: 210, w: 80, delay: 1.3 },
        { x: 160, y: 220, w: 80, delay: 1.5 },
        { x: 280, y: 210, w: 80, delay: 1.7 },
      ].map((block, i) => (
        <motion.g
          key={`kb-${i}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: block.delay, duration: 0.7, ease }}
        >
          <rect x={block.x} y={block.y} width={block.w} height="50" rx="6"
            stroke={i % 2 === 0 ? accent : secondary} strokeWidth="0.5" opacity="0.2"
            fill={i % 2 === 0 ? accent : secondary} fillOpacity="0.03"
          />
          <rect x={block.x + 10} y={block.y + 12} width={block.w - 20} height="4" rx="1.5"
            fill={i % 2 === 0 ? accent : secondary} fillOpacity="0.2"
          />
          <rect x={block.x + 10} y={block.y + 22} width={block.w - 30} height="4" rx="1.5"
            fill={i % 2 === 0 ? accent : secondary} fillOpacity="0.12"
          />
          <rect x={block.x + 10} y={block.y + 32} width={block.w - 25} height="4" rx="1.5"
            fill={i % 2 === 0 ? accent : secondary} fillOpacity="0.08"
          />
        </motion.g>
      ))}

      {/* Connection lines from KB to brain */}
      {[
        { x1: 80, y1: 210, delay: 1.8 },
        { x1: 200, y1: 220, delay: 2.0 },
        { x1: 320, y1: 210, delay: 2.2 },
      ].map((line, i) => (
        <motion.line
          key={`kb-line-${i}`}
          x1={line.x1} y1={line.y1} x2="200" y2="165"
          stroke={accent} strokeWidth="0.5" opacity="0.12" strokeDasharray="3 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.12 }}
          transition={{ delay: line.delay, duration: 0.8, ease }}
        />
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Documents                                                  */
/* ------------------------------------------------------------------ */

function DocumentsVisual({ accent, secondary }: { accent: string; secondary: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Document 1 (back) */}
      <motion.g
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease }}
      >
        <rect x="50" y="30" width="130" height="170" rx="6" stroke={secondary} strokeWidth="0.5" opacity="0.2" fill={secondary} fillOpacity="0.02" />
        {/* Text lines */}
        {[50, 62, 74, 86, 98, 110, 130, 142, 154].map((lineY, i) => (
          <rect key={`d1-line-${i}`} x="66" y={lineY} width={60 + (i % 3) * 15} height="4" rx="1.5"
            fill={secondary} fillOpacity={0.08 + (i % 2) * 0.06}
          />
        ))}
      </motion.g>

      {/* Document 2 (front, main) */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, ...floatY(0.3, 5) }}
        transition={{ delay: 0.7, duration: 0.8, ease }}
      >
        <rect x="100" y="50" width="140" height="180" rx="6" stroke={accent} strokeWidth="0.7" opacity="0.3" fill="#0a0a1a" />
        {/* Header area */}
        <rect x="112" y="62" width="80" height="7" rx="2" fill={accent} fillOpacity="0.3" />
        <rect x="112" y="76" width="50" height="5" rx="1.5" fill={accent} fillOpacity="0.12" />
        {/* Text lines */}
        {[92, 104, 116, 128, 148, 160, 172, 184, 196].map((lineY, i) => (
          <rect key={`d2-line-${i}`} x="112" y={lineY} width={70 + (i % 4) * 10} height="4" rx="1.5"
            fill={accent} fillOpacity={0.06 + (i % 3) * 0.04}
          />
        ))}
      </motion.g>

      {/* OCR highlight boxes */}
      {[
        { x: 108, y: 60, w: 88, h: 26, delay: 1.2 },
        { x: 108, y: 100, w: 100, h: 22, delay: 1.5 },
        { x: 108, y: 155, w: 95, h: 30, delay: 1.8 },
      ].map((box, i) => (
        <motion.rect
          key={`ocr-${i}`}
          x={box.x} y={box.y} width={box.w} height={box.h} rx="3"
          stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.06"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 0.6, 0.4], scale: 1 }}
          transition={{ delay: box.delay, duration: 0.8, ease }}
          style={{ transformOrigin: `${box.x + box.w / 2}px ${box.y + box.h / 2}px` }}
        />
      ))}

      {/* Extraction arrows */}
      {[
        { x1: 248, y1: 73, x2: 300, y2: 60, delay: 1.4 },
        { x1: 248, y1: 111, x2: 300, y2: 130, delay: 1.7 },
        { x1: 248, y1: 170, x2: 300, y2: 200, delay: 2.0 },
      ].map((arrow, i) => (
        <motion.g key={`arrow-${i}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: arrow.delay, duration: 0.6, ease }}
        >
          <line x1={arrow.x1} y1={arrow.y1} x2={arrow.x2} y2={arrow.y2}
            stroke={accent} strokeWidth="1" opacity="0.3"
            markerEnd="url(#arrowHead)"
          />
        </motion.g>
      ))}

      {/* Extracted data cards */}
      {[
        { x: 290, y: 42, delay: 1.6 },
        { x: 290, y: 115, delay: 1.9 },
        { x: 290, y: 185, delay: 2.2 },
      ].map((card, i) => (
        <motion.g key={`data-card-${i}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: card.delay, duration: 0.7, ease }}
        >
          <rect x={card.x} y={card.y} width="80" height="40" rx="5"
            stroke={accent} strokeWidth="0.6" opacity="0.25"
            fill={accent} fillOpacity="0.04"
          />
          <rect x={card.x + 10} y={card.y + 10} width="35" height="5" rx="1.5" fill={accent} fillOpacity="0.3" />
          <rect x={card.x + 10} y={card.y + 22} width="55" height="4" rx="1.5" fill={secondary} fillOpacity="0.2" />
        </motion.g>
      ))}

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowHead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill={accent} opacity="0.4" />
        </marker>
      </defs>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Monitor                                                    */
/* ------------------------------------------------------------------ */

function MonitorVisual({ accent, secondary }: { accent: string; secondary: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Radar scanning circle */}
      <motion.g style={{ transformOrigin: '320px 80px' }}>
        <circle cx="320" cy="80" r="50" stroke={accent} strokeWidth="0.4" opacity="0.1" fill="none" />
        <circle cx="320" cy="80" r="35" stroke={accent} strokeWidth="0.3" opacity="0.08" fill="none" />
        <circle cx="320" cy="80" r="20" stroke={accent} strokeWidth="0.3" opacity="0.06" fill="none" />
        <circle cx="320" cy="80" r="3" fill={accent} opacity="0.5" />
        <motion.line
          x1="320" y1="80" x2="370" y2="80"
          stroke={accent} strokeWidth="1" opacity="0.3"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '320px 80px' }}
        />
        {/* Radar sweep */}
        <motion.path
          d="M320 80 L370 80 A50 50 0 0 1 355 115 Z"
          fill={accent} fillOpacity="0.06"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '320px 80px' }}
        />
      </motion.g>

      {/* Price cards */}
      {[
        { x: 30, y: 20, price: 'R$49.90', change: '-12%', color: accent, delay: 0.6 },
        { x: 30, y: 90, price: 'R$129', change: '+8%', color: secondary, delay: 0.8 },
        { x: 30, y: 160, price: 'R$87.50', change: '-3%', color: accent, delay: 1.0 },
      ].map((card, i) => (
        <motion.g key={`price-${i}`}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0, ...floatY(i * 0.4, 4.5 + i * 0.3) }}
          transition={{ delay: card.delay, duration: 0.7, ease }}
        >
          <rect x={card.x} y={card.y} width="140" height="55" rx="8"
            stroke={card.color} strokeWidth="0.6" opacity="0.25"
            fill={card.color} fillOpacity="0.03"
          />
          <text x={card.x + 14} y={card.y + 22} fill={card.color} fontSize="13" fontFamily="monospace" opacity="0.7">
            {card.price}
          </text>
          <text x={card.x + 14} y={card.y + 40} fill={card.change.startsWith('+') ? '#00D4AA' : '#FF6B6B'} fontSize="10" fontFamily="monospace" opacity="0.5">
            {card.change}
          </text>
          {/* Mini sparkline */}
          <motion.path
            d={`M${card.x + 80} ${card.y + 35} Q${card.x + 95} ${card.y + 20} ${card.x + 110} ${card.y + 28} Q${card.x + 120} ${card.y + 32} ${card.x + 130} ${card.y + 25}`}
            stroke={card.color} strokeWidth="1" fill="none" opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: card.delay + 0.5, duration: 0.8, ease }}
          />
        </motion.g>
      ))}

      {/* Alert badges */}
      {[
        { cx: 200, cy: 50, delay: 1.3 },
        { cx: 230, cy: 120, delay: 1.6 },
      ].map((alert, i) => (
        <motion.g key={`alert-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: alert.delay, duration: 0.5, ease }}
          style={{ transformOrigin: `${alert.cx}px ${alert.cy}px` }}
        >
          <circle cx={alert.cx} cy={alert.cy} r="12" fill="#FF6B6B" fillOpacity="0.12" stroke="#FF6B6B" strokeWidth="0.6" opacity="0.4" />
          <motion.circle cx={alert.cx} cy={alert.cy} r="12" fill="none" stroke="#FF6B6B" strokeWidth="0.8" opacity="0.2"
            animate={{ r: [12, 20, 12], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <text x={alert.cx} y={alert.cy + 4} textAnchor="middle" fill="#FF6B6B" fontSize="10" fontWeight="bold" opacity="0.7">!</text>
        </motion.g>
      ))}

      {/* Trend lines bottom */}
      <motion.path
        d="M30 250 Q80 230 130 245 Q180 260 230 235 Q280 210 330 225 Q360 235 380 220"
        stroke={accent} strokeWidth="1.5" fill="none" opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1.8, ease }}
      />
      <motion.path
        d="M30 265 Q80 255 130 260 Q180 265 230 255 Q280 250 330 258 Q360 262 380 255"
        stroke={secondary} strokeWidth="1" fill="none" opacity="0.12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease }}
      />

      {/* Data points on trend line */}
      {[130, 230, 330].map((cx, i) => (
        <motion.circle
          key={`trend-dot-${i}`}
          cx={cx} cy={[245, 235, 225][i]} r="3" fill={accent}
          initial={{ opacity: 0 }}
          animate={pulseOpacity(2 + i * 0.3)}
          transition={{ delay: 2, duration: 0.5 }}
        />
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Pipeline                                                   */
/* ------------------------------------------------------------------ */

function PipelineVisual({ accent, secondary }: { accent: string; secondary: string }) {
  const sources = [
    { x: 20, y: 30, label: 'API', delay: 0.5 },
    { x: 20, y: 90, label: 'CSV', delay: 0.65 },
    { x: 20, y: 150, label: 'Web', delay: 0.8 },
    { x: 20, y: 210, label: 'DB', delay: 0.95 },
  ]

  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Source blocks */}
      {sources.map((src, i) => (
        <motion.g key={`src-${i}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, ...floatX(i * 0.3, 5 + i * 0.5) }}
          transition={{ delay: src.delay, duration: 0.7, ease }}
        >
          <rect x={src.x} y={src.y} width="80" height="40" rx="6"
            stroke={i % 2 === 0 ? accent : secondary} strokeWidth="0.6" opacity="0.3"
            fill={i % 2 === 0 ? accent : secondary} fillOpacity="0.04"
          />
          <text x={src.x + 40} y={src.y + 24} textAnchor="middle"
            fill={i % 2 === 0 ? accent : secondary} fontSize="11" fontFamily="monospace" opacity="0.6"
          >
            {src.label}
          </text>
        </motion.g>
      ))}

      {/* Flow lines from sources to funnel */}
      {sources.map((src, i) => (
        <motion.path
          key={`flow-${i}`}
          d={`M100 ${src.y + 20} Q150 ${src.y + 20} 180 150`}
          stroke={accent} strokeWidth="0.7" fill="none" opacity="0.15"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.8, ease }}
        />
      ))}

      {/* Flow particles */}
      {sources.map((src, i) => (
        <motion.circle
          key={`flow-particle-${i}`}
          r="2.5" fill={accent}
          initial={{ opacity: 0 }}
          animate={{
            cx: [100, 150, 180],
            cy: [src.y + 20, (src.y + 20 + 150) / 2, 150],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            delay: 2 + i * 0.6,
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Funnel */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        style={{ transformOrigin: '210px 150px' }}
      >
        <path d="M180 100 L240 100 L225 200 L195 200 Z"
          stroke={accent} strokeWidth="0.8" opacity="0.3"
          fill={accent} fillOpacity="0.05"
        />
        {/* Funnel internal lines */}
        <line x1="183" y1="120" x2="237" y2="120" stroke={accent} strokeWidth="0.4" opacity="0.12" />
        <line x1="188" y1="150" x2="232" y2="150" stroke={accent} strokeWidth="0.4" opacity="0.1" />
        <line x1="192" y1="180" x2="228" y2="180" stroke={accent} strokeWidth="0.4" opacity="0.08" />
        <text x="210" y="155" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" opacity="0.4">ETL</text>
      </motion.g>

      {/* Output arrow */}
      <motion.line
        x1="210" y1="200" x2="210" y2="230"
        stroke={accent} strokeWidth="1" opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.8, duration: 0.5, ease }}
      />

      {/* Database cylinder */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease }}
      >
        <ellipse cx="210" cy="245" rx="40" ry="10" stroke={secondary} strokeWidth="0.6" opacity="0.3" fill={secondary} fillOpacity="0.04" />
        <rect x="170" y="245" width="80" height="30" fill="#0a0a1a" stroke="none" />
        <line x1="170" y1="245" x2="170" y2="275" stroke={secondary} strokeWidth="0.6" opacity="0.3" />
        <line x1="250" y1="245" x2="250" y2="275" stroke={secondary} strokeWidth="0.6" opacity="0.3" />
        <ellipse cx="210" cy="275" rx="40" ry="10" stroke={secondary} strokeWidth="0.6" opacity="0.3" fill={secondary} fillOpacity="0.04" />
        <ellipse cx="210" cy="258" rx="40" ry="10" stroke={secondary} strokeWidth="0.3" opacity="0.1" fill="none" />
        <text x="210" y="265" textAnchor="middle" fill={secondary} fontSize="9" fontFamily="monospace" opacity="0.4">DATA</text>
      </motion.g>

      {/* Output pipeline to right */}
      <motion.path
        d="M250 260 Q290 260 310 240 Q330 220 360 220"
        stroke={accent} strokeWidth="0.8" fill="none" opacity="0.2"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.3, duration: 0.8, ease }}
      />

      {/* Output endpoint */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, duration: 0.6, ease }}
        style={{ transformOrigin: '370px 220px' }}
      >
        <rect x="345" y="205" width="50" height="30" rx="6"
          stroke={accent} strokeWidth="0.6" opacity="0.3"
          fill={accent} fillOpacity="0.05"
        />
        <text x="370" y="224" textAnchor="middle" fill={accent} fontSize="8" fontFamily="monospace" opacity="0.5">
          OUT
        </text>
      </motion.g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual: Website (Real Estate)                                      */
/* ------------------------------------------------------------------ */

function WebsiteVisual({ accent }: { accent: string; secondary: string }) {
  const gold = '#D4A843'
  const olive = '#6B7F4A'
  const sand = '#FBF9F5'
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
      {/* Browser chrome */}
      <motion.rect x="10" y="5" width="380" height="290" rx="10" fill="#1a1a2e" stroke={accent} strokeWidth="0.5" opacity="0.3"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.3, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease }}
      />
      <rect x="10" y="5" width="380" height="26" rx="10" fill={accent} fillOpacity="0.06" />
      <rect x="10" y="25" width="380" height="6" fill={accent} fillOpacity="0.06" />
      <circle cx="26" cy="18" r="3.5" fill="#FF5F57" opacity="0.6" />
      <circle cx="38" cy="18" r="3.5" fill="#FFBD2E" opacity="0.6" />
      <circle cx="50" cy="18" r="3.5" fill="#28CA41" opacity="0.6" />
      <rect x="80" y="12" width="220" height="13" rx="6.5" fill="white" fillOpacity="0.05" />
      <rect x="92" y="16" width="140" height="5" rx="2" fill="white" fillOpacity="0.1" />

      {/* Navbar */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6, ease }}>
        <rect x="16" y="35" width="368" height="22" fill={sand} fillOpacity="0.05" />
        <rect x="28" y="40" width="55" height="10" rx="3" fill={gold} fillOpacity="0.5" />
        <rect x="260" y="42" width="28" height="5" rx="1.5" fill="white" fillOpacity="0.12" />
        <rect x="296" y="42" width="28" height="5" rx="1.5" fill="white" fillOpacity="0.12" />
        <rect x="332" y="42" width="28" height="5" rx="1.5" fill="white" fillOpacity="0.12" />
        <rect x="366" y="40" width="14" height="8" rx="3" fill={olive} fillOpacity="0.5" />
      </motion.g>

      {/* Hero section */}
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7, ease }}>
        <rect x="16" y="59" width="368" height="90" fill={gold} fillOpacity="0.03" />
        {/* Gold decorative line */}
        <rect x="32" y="68" width="30" height="2" rx="1" fill={gold} fillOpacity="0.5" />
        {/* Hero headline */}
        <rect x="32" y="76" width="160" height="10" rx="3" fill={gold} fillOpacity="0.4" />
        <rect x="32" y="92" width="120" height="6" rx="2" fill="white" fillOpacity="0.12" />
        <rect x="32" y="103" width="140" height="5" rx="1.5" fill="white" fillOpacity="0.08" />
        {/* CTA buttons */}
        <motion.rect x="32" y="118" width="52" height="14" rx="5" fill={olive} fillOpacity="0.5"
          animate={pulseOpacity(2)} />
        <rect x="90" y="118" width="52" height="14" rx="5" fill="transparent" stroke={gold} strokeWidth="0.8" strokeOpacity="0.4" />
        {/* Hero image */}
        <rect x="260" y="65" width="115" height="76" rx="8" fill={gold} fillOpacity="0.06" stroke={gold} strokeWidth="0.4" strokeOpacity="0.15" />
        <rect x="268" y="73" width="99" height="50" rx="5" fill={sand} fillOpacity="0.05" />
        <circle cx="317" cy="98" r="15" fill={gold} fillOpacity="0.08" />
        <rect x="268" y="128" width="40" height="5" rx="1.5" fill="white" fillOpacity="0.1" />
        <rect x="340" y="128" width="27" height="5" rx="1.5" fill={gold} fillOpacity="0.2" />
      </motion.g>

      {/* Section title */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6, ease }}>
        <rect x="32" y="158" width="16" height="2" rx="1" fill={gold} fillOpacity="0.5" />
        <rect x="32" y="164" width="70" height="6" rx="2" fill={gold} fillOpacity="0.3" />
        <rect x="32" y="174" width="100" height="4" rx="1" fill="white" fillOpacity="0.08" />
      </motion.g>

      {/* Property cards */}
      {[
        { x: 24, delay: 1.2 },
        { x: 146, delay: 1.4 },
        { x: 268, delay: 1.6 },
      ].map((card, i) => (
        <motion.g key={`card-${i}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: [15, 0, -3, 0] }}
          transition={{ delay: card.delay, duration: 2, ease }}
        >
          <rect x={card.x} y="186" width="112" height="96" rx="8" fill="white" fillOpacity="0.03" stroke={accent} strokeWidth="0.3" strokeOpacity="0.12" />
          {/* Image area */}
          <rect x={card.x} y="186" width="112" height="48" rx="8" fill={i % 2 === 0 ? gold : olive} fillOpacity="0.06" />
          <rect x={card.x} y="228" width="112" height="6" rx="0" fill={i % 2 === 0 ? gold : olive} fillOpacity="0.06" />
          {/* Badge */}
          <rect x={card.x + 6} y="192" width="30" height="10" rx="3" fill={olive} fillOpacity="0.3" />
          {/* Card text */}
          <rect x={card.x + 8} y="242" width="65" height="5" rx="1.5" fill="white" fillOpacity="0.15" />
          <rect x={card.x + 8} y="251" width="45" height="3.5" rx="1" fill="white" fillOpacity="0.08" />
          {/* Price */}
          <rect x={card.x + 8} y="260" width="55" height="7" rx="2" fill={gold} fillOpacity="0.35" />
          {/* CTA */}
          <rect x={card.x + 76} y="260" width="28" height="7" rx="3" fill={olive} fillOpacity="0.3" />
        </motion.g>
      ))}

      {/* WhatsApp float */}
      <motion.circle cx="374" cy="280" r="9" fill="#25D366" opacity="0.6"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual selector                                                    */
/* ------------------------------------------------------------------ */

function HeroVisual({
  type,
  accent,
  secondary,
}: {
  type: ProjectHeroProps['heroVisualType']
  accent: string
  secondary: string
}) {
  const map = {
    dashboard: DashboardVisual,
    workflow: WorkflowVisual,
    chat: ChatVisual,
    documents: DocumentsVisual,
    monitor: MonitorVisual,
    pipeline: PipelineVisual,
    website: WebsiteVisual,
  }
  const Component = map[type]
  return <Component accent={accent} secondary={secondary} />
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ProjectHero({
  title,
  subtitle,
  categoryLabel,
  status,
  statusType,
  accentColor,
  accentColorRGB,
  techs,
  heroVisualType,
}: ProjectHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ---- Gradient orbs - contained ---- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[12%] w-[70vw] md:w-[700px] h-[70vw] md:h-[700px] rounded-full blur-[180px]"
          style={{ background: `rgba(${accentColorRGB}, 0.07)` }}
        />
        <div className="absolute -bottom-[18%] -right-[10%] w-[55vw] md:w-[550px] h-[55vw] md:h-[550px] bg-accent-purple/[0.06] rounded-full blur-[160px]" />
        <div
          className="absolute top-[40%] right-[20%] w-[30vw] md:w-[300px] h-[30vw] md:h-[300px] rounded-full blur-[120px]"
          style={{ background: `rgba(${accentColorRGB}, 0.04)` }}
        />
      </div>

      {/* ---- Subtle grid overlay ---- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ---- Back link ---- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease }}
        className="absolute top-6 left-6 md:top-8 md:left-10 z-20"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-txt-secondary hover:text-txt-primary transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <span>Portfolio</span>
        </Link>
      </motion.div>

      {/* ---- Content ---- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
          {/* ---- Left column: text (55%) ---- */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            {/* Category badge */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 border rounded-full mb-8"
              style={{
                color: accentColor,
                borderColor: `rgba(${accentColorRGB}, 0.3)`,
                backgroundColor: `rgba(${accentColorRGB}, 0.05)`,
              }}
            >
              <span style={{ color: accentColor }}>//</span>
              {categoryLabel}
            </motion.span>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-bold text-txt-primary leading-[1.08] tracking-[-0.03em] mb-6"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg md:text-xl text-txt-secondary max-w-xl leading-relaxed mb-8"
            >
              {subtitle}
            </motion.p>

            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mb-8"
            >
              <span
                className={`inline-flex items-center gap-2 font-mono text-xs font-medium px-4 py-2 rounded-full border ${
                  statusType === 'active'
                    ? 'bg-accent-teal/[0.1] text-accent-teal border-accent-teal/30'
                    : 'bg-accent-purple/[0.1] text-accent-purple border-accent-purple/30'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    statusType === 'active' ? 'bg-accent-teal' : 'bg-accent-purple'
                  }`}
                >
                  {statusType === 'active' && (
                    <motion.span
                      className="block w-2 h-2 rounded-full bg-accent-teal"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                </span>
                {status}
              </span>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-2"
            >
              {techs.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease }}
                  className="group/tech relative font-mono text-xs px-3.5 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-txt-secondary hover:border-white/[0.15] hover:text-txt-primary transition-all duration-300 cursor-default"
                >
                  {tech.name}
                  {/* Role tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-bg-secondary border border-white/[0.1] rounded-md text-[0.65rem] text-txt-muted whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {tech.role}
                  </span>
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ---- Right column: visual (45%) ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease }}
            className="w-full lg:w-[45%] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              {/* Glow behind visual */}
              <div
                className="absolute inset-0 rounded-2xl blur-[60px] opacity-[0.08]"
                style={{ background: accentColor }}
              />
              {/* Visual container */}
              <div
                className="relative w-full h-full rounded-2xl border overflow-hidden p-4"
                style={{
                  borderColor: `rgba(${accentColorRGB}, 0.12)`,
                  background: `linear-gradient(145deg, rgba(${accentColorRGB}, 0.03) 0%, rgba(10,10,26,0.8) 100%)`,
                }}
              >
                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-16 h-[1px]"
                  style={{ background: `linear-gradient(90deg, ${accentColor}44, transparent)` }}
                />
                <div
                  className="absolute top-0 left-0 w-[1px] h-16"
                  style={{ background: `linear-gradient(180deg, ${accentColor}44, transparent)` }}
                />
                <div
                  className="absolute bottom-0 right-0 w-16 h-[1px]"
                  style={{ background: `linear-gradient(270deg, ${accentColor}44, transparent)` }}
                />
                <div
                  className="absolute bottom-0 right-0 w-[1px] h-16"
                  style={{ background: `linear-gradient(0deg, ${accentColor}44, transparent)` }}
                />

                <HeroVisual
                  type={heroVisualType}
                  accent={accentColor}
                  secondary="#6C63FF"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/[0.1] rounded-xl relative">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[3px] h-2 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2"
            style={{ backgroundColor: accentColor }}
          />
        </div>
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-txt-muted">
          Scroll
        </span>
      </motion.div>

      {/* ---- Bottom fade-out gradient ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}
