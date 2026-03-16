'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import ProjectHeroVisual from './ProjectHeroVisual'

const ease = [0.16, 1, 0.3, 1] as const

function ScrollHint({ accentColor }: { accentColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease }}
      className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[18] flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-md"
      style={{
        background: 'rgba(5, 5, 16, 0.7)',
        border: `1px solid rgba(255, 255, 255, 0.1)`,
      }}
    >
      {/* Mouse icon (desktop) */}
      <div className="hidden md:block">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <motion.rect
            x="7" y="6" width="2" height="4" rx="1" fill="white"
            animate={{ y: [6, 12, 6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
      {/* Touch icon (mobile) */}
      <div className="block md:hidden">
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <path d="M9 4C9 2.9 8.1 2 7 2S5 2.9 5 4v8.5c0 .3-.3.5-.5.4-.2-.1-.4-.2-.6-.2C3.3 12.5 2.5 12.3 2 13c-.5.7-.3 1.5.2 2.2l3 4.3c.5.7 1.3 1.1 2.2 1.1h5.2c1.3 0 2.4-1 2.4-2.3V14c0-.6-.4-1-1-1s-1 .4-1 1v-.5c0-.6-.4-1-1-1s-1 .4-1 1V13c0-.6-.4-1-1-1s-1 .4-1 1V4z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <motion.path
            d="M9 0v3"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.5"
            animate={{ y: [0, -2, 0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <path d="M6 22l3 2 3-2" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          </motion.g>
        </svg>
      </div>
      <span className="text-[0.65rem] font-medium text-white/70 whitespace-nowrap">
        <span className="hidden md:inline">Scroll para explorar</span>
        <span className="md:hidden">Toque para explorar</span>
      </span>
    </motion.div>
  )
}

function CloseButton({ onClick, accentColor }: { onClick: (e: React.MouseEvent) => void; accentColor: string }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="absolute bottom-3 right-4 z-[25] flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md font-mono text-[0.65rem] font-medium transition-all duration-200 hover:scale-105"
      style={{
        background: 'rgba(5, 5, 16, 0.8)',
        border: `1px solid ${accentColor}40`,
        color: accentColor,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M1 1l8 8M9 1l-8 8" />
      </svg>
      Fechar
    </motion.button>
  )
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isInteractive, setIsInteractive] = useState(false)

  const handlePreviewClick = useCallback((e: React.MouseEvent) => {
    if (project.liveUrl && !isInteractive) {
      e.preventDefault()
      e.stopPropagation()
      setIsInteractive(true)
    }
  }, [project.liveUrl, isInteractive])

  const handleCloseInteractive = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsInteractive(false)
  }, [])

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    if (isInteractive) {
      e.preventDefault()
    }
  }, [isInteractive])

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease }}
    >
      <Link href={`/projetos/${project.slug}`} className="block group" onClick={handleLinkClick}>
        <div className="relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl group-hover:shadow-[0_20px_60px_-10px] group-hover:translate-y-[-4px]"
          style={{ '--card-accent': project.accentColor, '--card-accent-rgb': project.accentColorRGB } as React.CSSProperties}
        >
          {/* Hero Preview / Thumbnail */}
          <div
            className={`relative bg-bg-secondary overflow-hidden transition-all duration-500 ${
              isInteractive ? 'h-[340px] md:h-[400px]' : 'h-[240px] md:h-[280px]'
            }`}
            onClick={handlePreviewClick}
          >
            {/* Gradient overlay - fades when interactive */}
            <div className={`absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-500 ${isInteractive ? 'opacity-10' : 'opacity-100'}`} />
            <div className={`absolute inset-0 bg-gradient-to-r from-bg-primary/30 to-transparent z-10 pointer-events-none transition-opacity duration-500 ${isInteractive ? 'opacity-10' : 'opacity-100'}`} />

            {/* Hero Visual */}
            {project.liveUrl ? (
              <div className={`w-full h-full transition-all duration-700 overflow-hidden ${
                isInteractive ? 'opacity-100 pointer-events-auto' : 'opacity-90 pointer-events-none group-hover:opacity-100'
              }`}>
                <div className="relative w-full h-full" style={{ overflow: 'hidden' }}>
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="absolute top-0 left-0 border-0"
                    style={{
                      width: '400%',
                      height: '400%',
                      transform: 'scale(0.25)',
                      transformOrigin: 'top left',
                    }}
                    loading="lazy"
                    tabIndex={isInteractive ? 0 : -1}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-full opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105">
                <ProjectHeroVisual type={project.heroVisualType} accentColor={project.accentColor} />
              </div>
            )}

            {/* Interactive hint */}
            <AnimatePresence>
              {project.liveUrl && !isInteractive && (
                <ScrollHint accentColor={project.accentColor} />
              )}
            </AnimatePresence>

            {/* Close button when interactive */}
            <AnimatePresence>
              {isInteractive && (
                <CloseButton onClick={handleCloseInteractive} accentColor={project.accentColor} />
              )}
            </AnimatePresence>

            {/* Active border glow when interactive */}
            {isInteractive && (
              <div
                className="absolute inset-0 z-[16] pointer-events-none rounded-t-2xl"
                style={{
                  boxShadow: `inset 0 0 0 1px ${project.accentColor}30, inset 0 0 30px ${project.accentColor}10`,
                }}
              />
            )}

            {/* Status badge */}
            <span
              className={`absolute top-4 right-4 z-20 font-mono text-[0.7rem] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${
                project.statusType === 'active'
                  ? 'bg-accent-teal/20 text-accent-teal border border-accent-teal/30'
                  : 'bg-accent-purple/20 text-accent-purple border border-accent-purple/30'
              }`}
            >
              {project.status}
            </span>

            {/* Category badge */}
            <span className="absolute top-4 left-4 z-20 font-mono text-[0.65rem] font-medium px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-txt-primary/80 border border-white/10">
              {project.categoryLabel}
            </span>
          </div>

          {/* Content */}
          <div className="p-7 md:p-8 relative">
            {/* Accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
            />

            <h3 className="font-heading text-xl md:text-[1.35rem] font-semibold text-txt-primary mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
              {project.title}
            </h3>

            <p className="text-sm text-txt-secondary leading-relaxed mb-5 line-clamp-2">
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.slice(0, 4).map((tech) => (
                <span
                  key={tech.name}
                  className="font-mono text-[0.7rem] px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-txt-secondary group-hover:border-white/[0.15] transition-colors duration-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Metrics preview */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-[0.7rem] text-txt-muted">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-txt-primary group-hover:text-white transition-colors">
                {project.liveUrl ? 'Ver Site ao Vivo' : 'Ver Case Completo'}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>

              {/* Glow dot */}
              <div
                className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-lg"
                style={{
                  backgroundColor: project.accentColor,
                  boxShadow: `0 0 12px ${project.accentColor}`,
                }}
              />
            </div>
          </div>

          {/* Hover glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
            style={{
              boxShadow: `inset 0 1px 0 0 rgba(${project.accentColorRGB}, 0.15), 0 20px 60px -10px rgba(${project.accentColorRGB}, 0.15)`,
            }}
          />
        </div>
      </Link>
    </motion.div>
  )
}
