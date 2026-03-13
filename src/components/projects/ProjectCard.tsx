'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import ProjectHeroVisual from './ProjectHeroVisual'

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease }}
    >
      <Link href={`/projetos/${project.slug}`} className="block group">
        <div className="relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl group-hover:shadow-[0_20px_60px_-10px] group-hover:translate-y-[-4px]"
          style={{ '--card-accent': project.accentColor, '--card-accent-rgb': project.accentColorRGB } as React.CSSProperties}
        >
          {/* Hero Preview / Thumbnail */}
          <div className="relative h-[240px] md:h-[280px] bg-bg-secondary overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/30 to-transparent z-10 pointer-events-none" />

            {/* Hero Visual */}
            {project.liveUrl ? (
              <div className="w-full h-full opacity-90 transition-all duration-700 group-hover:opacity-100 overflow-hidden pointer-events-none">
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
                    tabIndex={-1}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-full opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105">
                <ProjectHeroVisual type={project.heroVisualType} accentColor={project.accentColor} />
              </div>
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
