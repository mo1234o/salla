import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="flex size-10 items-center justify-center overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border">
        <Image
          src="/salla/logo.png"
          alt="شعار سلة"
          width={40}
          height={40}
          className="size-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-xl font-extrabold',
            variant === 'light' ? 'text-primary-foreground' : 'text-secondary',
          )}
        >
          سلة
        </span>
        <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-primary">
          SALLA
        </span>
      </span>
    </div>
  )
}
