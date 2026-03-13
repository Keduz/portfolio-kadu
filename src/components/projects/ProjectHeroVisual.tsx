'use client'

import { motion } from 'framer-motion'

type VisualType = 'dashboard' | 'workflow' | 'chat' | 'documents' | 'monitor' | 'pipeline' | 'website'

const ease = [0.16, 1, 0.3, 1] as const

function DashboardVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Background grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke={color} strokeWidth="0.3" opacity="0.08" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="280" stroke={color} strokeWidth="0.3" opacity="0.08" />
      ))}

      {/* Sidebar */}
      <rect x="10" y="20" width="60" height="240" rx="6" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.5" opacity="0.15" />
      <rect x="20" y="35" width="40" height="4" rx="2" fill={color} opacity="0.3" />
      <rect x="20" y="50" width="30" height="3" rx="1.5" fill={color} opacity="0.15" />
      <rect x="20" y="62" width="35" height="3" rx="1.5" fill={color} opacity="0.15" />
      <rect x="20" y="74" width="28" height="3" rx="1.5" fill={color} opacity="0.15" />
      <rect x="20" y="90" width="40" height="3" rx="1.5" fill="#6C63FF" opacity="0.4" />

      {/* KPI Cards Row */}
      <rect x="85" y="20" width="72" height="45" rx="6" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="95" y="38" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">RECEITA</text>
      <text x="95" y="52" fill={color} opacity="0.9" fontSize="12" fontWeight="bold" fontFamily="sans-serif">R$ 1.2M</text>

      <rect x="167" y="20" width="72" height="45" rx="6" fill="#6C63FF" fillOpacity="0.08" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="177" y="38" fill="#6C63FF" opacity="0.6" fontSize="6" fontFamily="monospace">MARGEM</text>
      <text x="177" y="52" fill="#6C63FF" opacity="0.9" fontSize="12" fontWeight="bold" fontFamily="sans-serif">34.5%</text>

      <rect x="249" y="20" width="72" height="45" rx="6" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="259" y="38" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">DESPESAS</text>
      <text x="259" y="52" fill={color} opacity="0.9" fontSize="12" fontWeight="bold" fontFamily="sans-serif">R$ 780K</text>

      <rect x="331" y="20" width="58" height="45" rx="6" fill="#6C63FF" fillOpacity="0.08" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="339" y="38" fill="#6C63FF" opacity="0.6" fontSize="6" fontFamily="monospace">ROI</text>
      <text x="339" y="52" fill="#6C63FF" opacity="0.9" fontSize="12" fontWeight="bold" fontFamily="sans-serif">156%</text>

      {/* Bar Chart */}
      <rect x="85" y="80" width="150" height="100" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.12" />
      {[30, 55, 45, 70, 60, 85, 75].map((h, i) => (
        <rect key={i} x={98 + i * 18} y={170 - h} width="10" height={h} rx="2" fill={i % 2 === 0 ? color : '#6C63FF'} opacity={0.3 + (i * 0.05)} />
      ))}

      {/* Line Chart */}
      <rect x="249" y="80" width="140" height="100" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.12" />
      <path d="M265 160 L285 140 L305 148 L325 125 L345 130 L365 110 L375 115" stroke={color} strokeWidth="1.5" opacity="0.6" fill="none" />
      <path d="M265 160 L285 140 L305 148 L325 125 L345 130 L365 110 L375 115 L375 170 L265 170Z" fill={color} opacity="0.05" />

      {/* Table */}
      <rect x="85" y="195" width="304" height="65" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.12" />
      <line x1="85" y1="210" x2="389" y2="210" stroke={color} strokeWidth="0.5" opacity="0.15" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <rect x="95" y={216 + r * 11} width="50" height="4" rx="2" fill={color} opacity="0.15" />
          <rect x="160" y={216 + r * 11} width="35" height="4" rx="2" fill="#6C63FF" opacity="0.12" />
          <rect x="210" y={216 + r * 11} width="45" height="4" rx="2" fill={color} opacity="0.1" />
          <rect x="270" y={216 + r * 11} width="30" height="4" rx="2" fill={color} opacity="0.15" />
          <circle cx="370" cy={218 + r * 11} r="3" fill={r < 2 ? color : '#6C63FF'} opacity="0.3" />
        </g>
      ))}
    </svg>
  )
}

function WorkflowVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Background dots */}
      {Array.from({ length: 10 }).map((_, i) =>
        Array.from({ length: 7 }).map((_, j) => (
          <circle key={`${i}-${j}`} cx={20 + i * 40} cy={20 + j * 40} r="1" fill={color} opacity="0.1" />
        ))
      )}

      {/* Connection lines */}
      <path d="M80 70 L160 70" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 2" />
      <path d="M240 70 L320 70" stroke="#6C63FF" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 2" />
      <path d="M200 100 L200 140" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 2" />
      <path d="M200 200 L120 230" stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="4 2" />
      <path d="M200 200 L280 230" stroke="#6C63FF" strokeWidth="1" opacity="0.2" strokeDasharray="4 2" />
      <path d="M80 100 L120 140" stroke={color} strokeWidth="1" opacity="0.2" />
      <path d="M320 100 L280 140" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />

      {/* Webhook trigger */}
      <rect x="20" y="50" width="60" height="40" rx="8" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <text x="50" y="65" textAnchor="middle" fill={color} opacity="0.7" fontSize="6" fontFamily="monospace">WEBHOOK</text>
      <text x="50" y="78" textAnchor="middle" fill={color} opacity="0.5" fontSize="5" fontFamily="sans-serif">Trigger</text>

      {/* CRM Node */}
      <rect x="160" y="50" width="80" height="40" rx="8" fill="#6C63FF" fillOpacity="0.12" stroke="#6C63FF" strokeWidth="0.8" opacity="0.3" />
      <text x="200" y="65" textAnchor="middle" fill="#6C63FF" opacity="0.7" fontSize="7" fontWeight="bold" fontFamily="monospace">CRM</text>
      <text x="200" y="78" textAnchor="middle" fill="#6C63FF" opacity="0.5" fontSize="5" fontFamily="sans-serif">Qualificacao</text>

      {/* ERP Node */}
      <rect x="320" y="50" width="60" height="40" rx="8" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <text x="350" y="65" textAnchor="middle" fill={color} opacity="0.7" fontSize="7" fontWeight="bold" fontFamily="monospace">ERP</text>
      <text x="350" y="78" textAnchor="middle" fill={color} opacity="0.5" fontSize="5" fontFamily="sans-serif">Registro</text>

      {/* Processing center */}
      <circle cx="200" cy="170" r="35" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.8" opacity="0.2" />
      <circle cx="200" cy="170" r="25" fill="#6C63FF" fillOpacity="0.08" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="200" y="166" textAnchor="middle" fill="white" opacity="0.7" fontSize="6" fontWeight="bold" fontFamily="monospace">n8n</text>
      <text x="200" y="178" textAnchor="middle" fill="white" opacity="0.5" fontSize="5" fontFamily="sans-serif">Engine</text>

      {/* Conditional branches */}
      <rect x="120" y="140" width="60" height="30" rx="15" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="150" y="158" textAnchor="middle" fill={color} opacity="0.6" fontSize="5" fontFamily="monospace">FILTER</text>

      <rect x="220" y="140" width="60" height="30" rx="15" fill="#6C63FF" fillOpacity="0.1" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="250" y="158" textAnchor="middle" fill="#6C63FF" opacity="0.6" fontSize="5" fontFamily="monospace">TRANSFORM</text>

      {/* Email output */}
      <rect x="80" y="225" width="80" height="35" rx="6" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="120" y="240" textAnchor="middle" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">E-MAIL</text>
      <text x="120" y="252" textAnchor="middle" fill={color} opacity="0.4" fontSize="5" fontFamily="sans-serif">Marketing</text>

      {/* API output */}
      <rect x="240" y="225" width="80" height="35" rx="6" fill="#6C63FF" fillOpacity="0.1" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="280" y="240" textAnchor="middle" fill="#6C63FF" opacity="0.6" fontSize="6" fontFamily="monospace">API REST</text>
      <text x="280" y="252" textAnchor="middle" fill="#6C63FF" opacity="0.4" fontSize="5" fontFamily="sans-serif">Integracao</text>

      {/* Pulse circles on nodes */}
      <circle cx="50" cy="70" r="4" fill={color} opacity="0.5" />
      <circle cx="200" cy="70" r="4" fill="#6C63FF" opacity="0.5" />
      <circle cx="350" cy="70" r="4" fill={color} opacity="0.5" />
      <circle cx="200" cy="170" r="6" fill={color} opacity="0.6" />
    </svg>
  )
}

function ChatVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Chat container */}
      <rect x="100" y="15" width="200" height="250" rx="12" fill="white" fillOpacity="0.03" stroke={color} strokeWidth="0.5" opacity="0.15" />

      {/* Header */}
      <rect x="100" y="15" width="200" height="35" rx="12" fill={color} opacity="0.08" />
      <rect x="100" y="38" width="200" height="12" fill={color} opacity="0.08" />
      <circle cx="125" cy="32" r="8" fill={color} opacity="0.3" />
      <text x="140" y="30" fill="white" opacity="0.7" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Assistente IA</text>
      <circle cx="140" cy="38" r="2" fill="#00D4AA" opacity="0.8" />
      <text x="146" y="41" fill="#00D4AA" opacity="0.7" fontSize="5" fontFamily="sans-serif">Online</text>

      {/* User message */}
      <rect x="180" y="65" width="105" height="28" rx="10" fill={color} opacity="0.15" />
      <rect x="190" y="73" width="60" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="190" y="80" width="40" height="3" rx="1.5" fill="white" opacity="0.2" />

      {/* AI thinking indicator */}
      <rect x="115" y="103" width="90" height="28" rx="10" fill="#6C63FF" fillOpacity="0.1" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <circle cx="140" cy="117" r="2.5" fill="#6C63FF" opacity="0.4" />
      <circle cx="150" cy="117" r="2.5" fill="#6C63FF" opacity="0.6" />
      <circle cx="160" cy="117" r="2.5" fill="#6C63FF" opacity="0.8" />

      {/* AI response with product */}
      <rect x="115" y="141" width="150" height="55" rx="10" fill="#6C63FF" fillOpacity="0.1" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <rect x="125" y="151" width="80" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="125" y="158" width="60" height="3" rx="1.5" fill="white" opacity="0.2" />
      {/* Product card inside */}
      <rect x="125" y="167" width="60" height="22" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.3" opacity="0.2" />
      <rect x="130" y="172" width="20" height="12" rx="2" fill={color} opacity="0.15" />
      <rect x="154" y="173" width="25" height="3" rx="1" fill={color} opacity="0.2" />
      <rect x="154" y="179" width="18" height="3" rx="1" fill={color} opacity="0.3" />

      {/* Another user message */}
      <rect x="200" y="208" width="85" height="22" rx="10" fill={color} opacity="0.15" />
      <rect x="210" y="216" width="45" height="3" rx="1.5" fill="white" opacity="0.3" />

      {/* Input bar */}
      <rect x="110" y="240" width="180" height="18" rx="9" fill="white" fillOpacity="0.04" stroke={color} strokeWidth="0.5" opacity="0.15" />
      <rect x="120" y="247" width="50" height="3" rx="1.5" fill={color} opacity="0.15" />
      <circle cx="278" cy="249" r="6" fill={color} opacity="0.3" />

      {/* Knowledge base side */}
      <rect x="15" y="60" width="70" height="160" rx="8" fill="white" fillOpacity="0.02" stroke="#6C63FF" strokeWidth="0.5" opacity="0.1" />
      <text x="50" y="78" textAnchor="middle" fill="#6C63FF" opacity="0.5" fontSize="5" fontFamily="monospace">BASE DE</text>
      <text x="50" y="87" textAnchor="middle" fill="#6C63FF" opacity="0.5" fontSize="5" fontFamily="monospace">CONHECIMENTO</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="25" y={100 + i * 22} width="50" height="14" rx="3" fill="#6C63FF" fillOpacity={0.06 + i * 0.02} stroke="#6C63FF" strokeWidth="0.3" opacity="0.15" />
      ))}

      {/* Connection arrow from KB to chat */}
      <path d="M85 140 Q95 140 100 130" stroke="#6C63FF" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 2" />

      {/* RAG flow indicator */}
      <rect x="320" y="80" width="65" height="120" rx="8" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.1" />
      <text x="352" y="98" textAnchor="middle" fill={color} opacity="0.5" fontSize="5" fontFamily="monospace">RAG FLOW</text>
      <circle cx="352" cy="115" r="8" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <text x="352" y="118" textAnchor="middle" fill={color} opacity="0.6" fontSize="5">Q</text>
      <line x1="352" y1="125" x2="352" y2="140" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <circle cx="352" cy="148" r="8" fill="#6C63FF" fillOpacity="0.1" stroke="#6C63FF" strokeWidth="0.5" opacity="0.3" />
      <text x="352" y="151" textAnchor="middle" fill="#6C63FF" opacity="0.6" fontSize="5">S</text>
      <line x1="352" y1="158" x2="352" y2="173" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <circle cx="352" cy="181" r="8" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <text x="352" y="184" textAnchor="middle" fill={color} opacity="0.6" fontSize="5">R</text>
    </svg>
  )
}

function DocumentsVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Document 1 - Original */}
      <rect x="30" y="30" width="100" height="130" rx="4" fill="white" fillOpacity="0.04" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="80" y="25" textAnchor="middle" fill={color} opacity="0.5" fontSize="6" fontFamily="monospace">ORIGINAL</text>
      {/* Text lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x="40" y={45 + i * 13} width={60 + (i % 3) * 10} height="3" rx="1.5" fill={color} opacity={0.1 + (i % 2) * 0.05} />
      ))}
      {/* OCR highlight boxes */}
      <rect x="38" y="43" width="65" height="9" rx="1" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 1" />
      <rect x="38" y="69" width="80" height="9" rx="1" fill="#6C63FF" fillOpacity="0.08" stroke="#6C63FF" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 1" />
      <rect x="38" y="95" width="55" height="9" rx="1" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 1" />

      {/* Arrow */}
      <path d="M145 95 L175 95" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <path d="M170 90 L180 95 L170 100" fill={color} opacity="0.3" />

      {/* Processing block */}
      <rect x="185" y="55" width="80" height="80" rx="8" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="225" y="82" textAnchor="middle" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">OCR + IA</text>
      <circle cx="225" cy="100" r="12" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.5" opacity="0.3" />
      {/* Gear icon */}
      <circle cx="225" cy="100" r="5" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />
      <circle cx="225" cy="100" r="2" fill={color} opacity="0.4" />

      {/* Arrow */}
      <path d="M280 95 L310 95" stroke="#6C63FF" strokeWidth="1.5" opacity="0.3" />
      <path d="M305 90 L315 95 L305 100" fill="#6C63FF" opacity="0.3" />

      {/* Extracted Data */}
      <rect x="320" y="30" width="65" height="130" rx="4" fill="white" fillOpacity="0.04" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="352" y="25" textAnchor="middle" fill="#6C63FF" opacity="0.5" fontSize="6" fontFamily="monospace">EXTRAIDO</text>
      {/* Structured fields */}
      {['Nome', 'CNPJ', 'Valor', 'Data', 'Item'].map((field, i) => (
        <g key={field}>
          <text x="330" y={50 + i * 22} fill="#6C63FF" opacity="0.4" fontSize="5" fontFamily="monospace">{field}</text>
          <rect x="330" y={54 + i * 22} width={40 + (i % 2) * 10} height="6" rx="2" fill="#6C63FF" opacity="0.15" />
        </g>
      ))}

      {/* Bottom: accuracy bar */}
      <rect x="30" y="195" width="355" height="55" rx="8" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.1" />
      <text x="50" y="215" fill={color} opacity="0.5" fontSize="6" fontFamily="monospace">PRECISAO</text>
      <rect x="110" y="208" width="200" height="8" rx="4" fill="white" opacity="0.05" />
      <rect x="110" y="208" width="190" height="8" rx="4" fill={color} opacity="0.3" />
      <text x="315" y="215" fill={color} opacity="0.7" fontSize="7" fontWeight="bold" fontFamily="monospace">95%</text>
      <text x="50" y="237" fill="#6C63FF" opacity="0.4" fontSize="5" fontFamily="monospace">500+ docs/dia</text>
      <text x="200" y="237" fill={color} opacity="0.4" fontSize="5" fontFamily="monospace">{'< 10s'} por documento</text>
    </svg>
  )
}

function MonitorVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Background scanning lines */}
      <line x1="0" y1="140" x2="400" y2="140" stroke={color} strokeWidth="0.3" opacity="0.1" />
      <circle cx="200" cy="140" r="80" stroke={color} strokeWidth="0.3" opacity="0.06" />
      <circle cx="200" cy="140" r="120" stroke={color} strokeWidth="0.3" opacity="0.04" />

      {/* Price cards */}
      {[
        { x: 20, y: 20, name: 'Produto A', price: 'R$ 299', change: '+5%', up: true },
        { x: 145, y: 20, name: 'Produto B', price: 'R$ 459', change: '-3%', up: false },
        { x: 270, y: 20, name: 'Produto C', price: 'R$ 189', change: '+12%', up: true },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width="110" height="50" rx="6" fill="white" fillOpacity="0.03" stroke={card.up ? color : '#6C63FF'} strokeWidth="0.5" opacity="0.2" />
          <text x={card.x + 10} y={card.y + 16} fill="white" opacity="0.5" fontSize="6" fontFamily="monospace">{card.name}</text>
          <text x={card.x + 10} y={card.y + 33} fill="white" opacity="0.8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{card.price}</text>
          <text x={card.x + 75} y={card.y + 33} fill={card.up ? color : '#FF6B6B'} opacity="0.8" fontSize="7" fontFamily="monospace">{card.change}</text>
          {card.up ? (
            <path d={`M${card.x + 95} ${card.y + 30} l3-5 3 5`} fill={color} opacity="0.5" />
          ) : (
            <path d={`M${card.x + 95} ${card.y + 25} l3 5 3-5`} fill="#FF6B6B" opacity="0.5" />
          )}
        </g>
      ))}

      {/* Trend graph */}
      <rect x="20" y="85" width="170" height="90" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.12" />
      <text x="30" y="100" fill={color} opacity="0.5" fontSize="5" fontFamily="monospace">TENDENCIA DE PRECOS</text>
      <path d="M35 160 L55 145 L75 150 L95 130 L115 135 L135 120 L155 125 L175 110" stroke={color} strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M35 155 L55 150 L75 148 L95 145 L115 140 L135 142 L155 138 L175 135" stroke="#6C63FF" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="3 2" />

      {/* Alert panel */}
      <rect x="210" y="85" width="170" height="90" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.12" />
      <text x="220" y="100" fill={color} opacity="0.5" fontSize="5" fontFamily="monospace">ALERTAS ATIVOS</text>
      {[
        { text: 'Preco abaixo do mercado', type: 'alert' },
        { text: 'Novo concorrente detectado', type: 'warn' },
        { text: 'Oportunidade de compra', type: 'success' },
      ].map((alert, i) => (
        <g key={i}>
          <circle cx="225" cy={115 + i * 18} r="3" fill={alert.type === 'success' ? '#00D4AA' : alert.type === 'alert' ? color : '#FFB347'} opacity="0.6" />
          <text x="233" y={118 + i * 18} fill="white" opacity="0.5" fontSize="5.5" fontFamily="sans-serif">{alert.text}</text>
        </g>
      ))}

      {/* Bottom metrics */}
      <rect x="20" y="195" width="360" height="60" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.1" />
      {[
        { label: 'Monitorados', value: '50+' },
        { label: 'Precos', value: '10K+' },
        { label: 'Alertas/dia', value: '23' },
        { label: 'Conversao', value: '+35%' },
      ].map((m, i) => (
        <g key={i}>
          <text x={50 + i * 90} y={218} textAnchor="middle" fill={color} opacity="0.8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{m.value}</text>
          <text x={50 + i * 90} y={232} textAnchor="middle" fill="white" opacity="0.4" fontSize="5" fontFamily="monospace">{m.label}</text>
        </g>
      ))}
    </svg>
  )
}

function PipelineVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Sources */}
      {[
        { y: 30, label: 'API' },
        { y: 75, label: 'WEB' },
        { y: 120, label: 'CSV' },
        { y: 165, label: 'DB' },
        { y: 210, label: 'RSS' },
      ].map((src, i) => (
        <g key={i}>
          <rect x="15" y={src.y} width="50" height="28" rx="4" fill={color} fillOpacity={0.08 + i * 0.02} stroke={color} strokeWidth="0.5" opacity="0.2" />
          <text x="40" y={src.y + 17} textAnchor="middle" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">{src.label}</text>
          <line x1="65" y1={src.y + 14} x2="100" y2="140" stroke={color} strokeWidth="0.5" opacity="0.15" />
        </g>
      ))}

      {/* Funnel / Ingest */}
      <path d="M100 80 L140 110 L140 170 L100 200 Z" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <text x="120" y="138" textAnchor="middle" fill={color} opacity="0.5" fontSize="5" fontFamily="monospace">INGEST</text>
      <text x="120" y="148" textAnchor="middle" fill={color} opacity="0.4" fontSize="4" fontFamily="sans-serif">Scrapy</text>

      {/* Arrow */}
      <path d="M145 140 L170 140" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <path d="M165 135 L175 140 L165 145" fill={color} opacity="0.3" />

      {/* Transform */}
      <rect x="175" y="110" width="70" height="60" rx="8" fill="#6C63FF" fillOpacity="0.08" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="210" y="132" textAnchor="middle" fill="#6C63FF" opacity="0.6" fontSize="6" fontFamily="monospace">TRANSFORM</text>
      <text x="210" y="145" textAnchor="middle" fill="#6C63FF" opacity="0.4" fontSize="5" fontFamily="sans-serif">Pandas</text>
      {/* Mini flow inside */}
      <rect x="185" y="152" width="15" height="8" rx="2" fill="#6C63FF" opacity="0.15" />
      <rect x="205" y="152" width="15" height="8" rx="2" fill={color} opacity="0.15" />
      <rect x="225" y="152" width="15" height="8" rx="2" fill="#6C63FF" opacity="0.15" />

      {/* Arrow */}
      <path d="M250 140 L275 140" stroke="#6C63FF" strokeWidth="1.5" opacity="0.3" />
      <path d="M270 135 L280 140 L270 145" fill="#6C63FF" opacity="0.3" />

      {/* Database */}
      <ellipse cx="315" cy="120" rx="25" ry="8" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.25" />
      <rect x="290" y="120" width="50" height="40" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <ellipse cx="315" cy="160" rx="25" ry="8" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.25" />
      <text x="315" y="143" textAnchor="middle" fill={color} opacity="0.6" fontSize="6" fontFamily="monospace">PostgreSQL</text>

      {/* Arrow to API */}
      <path d="M340 140 L365 140" stroke={color} strokeWidth="1.5" opacity="0.3" />

      {/* API output */}
      <rect x="365" y="115" width="25" height="50" rx="4" fill="white" fillOpacity="0.03" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
      <text x="377" y="138" textAnchor="middle" fill="#6C63FF" opacity="0.5" fontSize="5" fontFamily="monospace">API</text>
      <text x="377" y="150" textAnchor="middle" fill="#6C63FF" opacity="0.4" fontSize="4" fontFamily="monospace">REST</text>

      {/* Bottom stats */}
      <rect x="80" y="230" width="240" height="35" rx="6" fill="white" fillOpacity="0.02" stroke={color} strokeWidth="0.5" opacity="0.1" />
      {[
        { label: 'Fontes', value: '500+' },
        { label: 'Registros/dia', value: '1M+' },
        { label: 'Uptime', value: '99.5%' },
      ].map((m, i) => (
        <g key={i}>
          <text x={130 + i * 85} y={248} textAnchor="middle" fill={color} opacity="0.8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">{m.value}</text>
          <text x={130 + i * 85} y={258} textAnchor="middle" fill="white" opacity="0.4" fontSize="5" fontFamily="monospace">{m.label}</text>
        </g>
      ))}
    </svg>
  )
}

function WebsiteVisual({ color }: { color: string }) {
  const gold = '#D4A843'
  const olive = '#6B7F4A'
  const sand = '#FBF9F5'
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
      {/* Browser chrome */}
      <rect x="15" y="10" width="370" height="260" rx="8" fill="#1a1a2e" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <rect x="15" y="10" width="370" height="24" rx="8" fill={color} fillOpacity="0.08" />
      <rect x="15" y="26" width="370" height="8" fill={color} fillOpacity="0.08" />
      {/* Window dots */}
      <circle cx="30" cy="22" r="3" fill="#FF5F57" opacity="0.6" />
      <circle cx="42" cy="22" r="3" fill="#FFBD2E" opacity="0.6" />
      <circle cx="54" cy="22" r="3" fill="#28CA41" opacity="0.6" />
      {/* URL bar */}
      <rect x="80" y="16" width="200" height="12" rx="6" fill="white" fillOpacity="0.06" />
      <rect x="90" y="20" width="120" height="4" rx="2" fill="white" fillOpacity="0.12" />

      {/* Site content area */}
      {/* Navbar */}
      <rect x="20" y="38" width="360" height="18" fill={sand} fillOpacity="0.06" />
      <rect x="30" y="43" width="50" height="8" rx="2" fill={gold} fillOpacity="0.5" />
      <rect x="260" y="44" width="25" height="5" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="292" y="44" width="25" height="5" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="324" y="44" width="25" height="5" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="356" y="43" width="18" height="7" rx="3" fill={olive} fillOpacity="0.5" />

      {/* Hero section */}
      <rect x="20" y="58" width="360" height="80" fill={gold} fillOpacity="0.04" />
      {/* Hero text */}
      <rect x="35" y="70" width="140" height="8" rx="2" fill={gold} fillOpacity="0.4" />
      <rect x="35" y="83" width="100" height="5" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="35" y="93" width="120" height="5" rx="1.5" fill="white" fillOpacity="0.1" />
      {/* Hero CTA buttons */}
      <rect x="35" y="108" width="45" height="12" rx="4" fill={olive} fillOpacity="0.5" />
      <rect x="86" y="108" width="45" height="12" rx="4" fill={gold} fillOpacity="0.3" stroke={gold} strokeWidth="0.5" strokeOpacity="0.4" />
      {/* Hero image placeholder */}
      <rect x="250" y="65" width="120" height="68" rx="6" fill={gold} fillOpacity="0.08" stroke={gold} strokeWidth="0.3" strokeOpacity="0.2" />
      <rect x="260" y="75" width="100" height="40" rx="4" fill={sand} fillOpacity="0.06" />
      <circle cx="310" cy="95" r="12" fill={gold} fillOpacity="0.1" />

      {/* Property cards section */}
      <rect x="35" y="148" width="60" height="5" rx="1.5" fill={gold} fillOpacity="0.3" />
      <rect x="35" y="156" width="90" height="4" rx="1" fill="white" fillOpacity="0.1" />

      {/* Property card 1 */}
      <rect x="30" y="166" width="105" height="90" rx="6" fill="white" fillOpacity="0.04" stroke={color} strokeWidth="0.3" opacity="0.15" />
      <rect x="30" y="166" width="105" height="45" rx="6" fill={gold} fillOpacity="0.06" />
      <rect x="30" y="205" width="105" height="6" rx="0" fill="white" fillOpacity="0.04" />
      <rect x="36" y="218" width="60" height="4" rx="1" fill="white" fillOpacity="0.15" />
      <rect x="36" y="226" width="40" height="3" rx="1" fill="white" fillOpacity="0.08" />
      <rect x="36" y="234" width="50" height="6" rx="2" fill={gold} fillOpacity="0.35" />
      <rect x="100" y="234" width="28" height="6" rx="2" fill={olive} fillOpacity="0.3" />

      {/* Property card 2 */}
      <rect x="148" y="166" width="105" height="90" rx="6" fill="white" fillOpacity="0.04" stroke={color} strokeWidth="0.3" opacity="0.15" />
      <rect x="148" y="166" width="105" height="45" rx="6" fill={olive} fillOpacity="0.06" />
      <rect x="148" y="205" width="105" height="6" rx="0" fill="white" fillOpacity="0.04" />
      <rect x="154" y="218" width="60" height="4" rx="1" fill="white" fillOpacity="0.15" />
      <rect x="154" y="226" width="45" height="3" rx="1" fill="white" fillOpacity="0.08" />
      <rect x="154" y="234" width="50" height="6" rx="2" fill={gold} fillOpacity="0.35" />
      <rect x="218" y="234" width="28" height="6" rx="2" fill={olive} fillOpacity="0.3" />

      {/* Property card 3 */}
      <rect x="266" y="166" width="105" height="90" rx="6" fill="white" fillOpacity="0.04" stroke={color} strokeWidth="0.3" opacity="0.15" />
      <rect x="266" y="166" width="105" height="45" rx="6" fill={gold} fillOpacity="0.08" />
      <rect x="266" y="205" width="105" height="6" rx="0" fill="white" fillOpacity="0.04" />
      <rect x="272" y="218" width="60" height="4" rx="1" fill="white" fillOpacity="0.15" />
      <rect x="272" y="226" width="40" height="3" rx="1" fill="white" fillOpacity="0.08" />
      <rect x="272" y="234" width="50" height="6" rx="2" fill={gold} fillOpacity="0.35" />
      <rect x="336" y="234" width="28" height="6" rx="2" fill={olive} fillOpacity="0.3" />

      {/* WhatsApp float button */}
      <circle cx="365" cy="255" r="8" fill="#25D366" opacity="0.6" />
    </svg>
  )
}

const visuals: Record<VisualType, React.ComponentType<{ color: string }>> = {
  dashboard: DashboardVisual,
  workflow: WorkflowVisual,
  chat: ChatVisual,
  documents: DocumentsVisual,
  monitor: MonitorVisual,
  pipeline: PipelineVisual,
  website: WebsiteVisual,
}

export default function ProjectHeroVisual({
  type,
  accentColor,
  className = '',
}: {
  type: VisualType
  accentColor: string
  className?: string
}) {
  const Visual = visuals[type]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease }}
      className={`w-full h-full flex items-center justify-center p-4 ${className}`}
    >
      <Visual color={accentColor} />
    </motion.div>
  )
}
