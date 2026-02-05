import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const BentoCard = ({
    children,
    className,
    title,
    subtitle,
    header,
    icon: Icon,
    href,
    onClick,
    delay = 0
}) => {
    const Component = href ? motion.a : motion.div;

    return (
        <Component
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={href || onClick ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
            whileTap={href || onClick ? { scale: 0.98 } : undefined}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl",
                "bg-white/[0.03] hover:bg-white/[0.05]",
                "border border-white/10 hover:border-white/20",
                "backdrop-blur-xl shadow-xl transition-all duration-300",
                className
            )}
        >
            {/* Gradient Blob for Hover */}
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-6">
                {header}

                <div className="mt-auto flex items-end justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        {Icon && (
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                <Icon className="text-gray-300 w-5 h-5" />
                            </div>
                        )}
                        {title && (
                            <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p className="text-sm text-white/50 font-medium">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {(href || onClick) && (
                        <div className="p-2 rounded-full border border-white/10 bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                            <ArrowUpRight size={18} />
                        </div>
                    )}
                </div>
                {children}
            </div>
        </Component>
    );
};
