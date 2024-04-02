interface NotificationContentProps {
  text: string
}
export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>
      <div className="text-xxs text-zinc-400 flex items-center gap-2">
        <span>Invited</span>
        <span>3 days ago</span>
      </div>
    </div>
  )
}
