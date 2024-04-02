import { ArrowUpRightIcon, Check, Rocket, X } from "lucide-react"
import { NotificationAction } from "./Notification/NotificationAction"
import { NotificationActions } from "./Notification/NotificationActions"
import { NotificationContent } from "./Notification/NotificationContent"
import { NotificationIcon } from "./Notification/NotificationIcon"
import { NotificationRoot } from "./Notification/NotificationRoot"

export function Widget() {
  return (
    <div className=" w-[448px] rounded overflow-hidden">
      {/* HEADER */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notifications</span>
        <button className="text-violet-500 text-bold text-xs hover:text-violet-400">
          MARK ALL AS READ
        </button>
      </div>
      {/* RECENT SECTION */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          Recent
        </div>
        <NotificationRoot>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Você recebeu um convite para participar da empresa Rocketseat." />
          <NotificationActions>
            <NotificationAction icon={X} />
            <NotificationAction
              icon={Check}
              className="bg-violet-500 dark:bg-violet-500"
            />
          </NotificationActions>
        </NotificationRoot>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950"></div>
      </div>
      {/* OLD */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm  text-zinc-400 dark:text-zinc-400 font-medium">
          Previous
        </div>
        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <NotificationRoot>
            <NotificationContent text="Você recebeu um convite para participar da empresa Rocketseat." />
            <NotificationActions>
              <NotificationAction
                icon={ArrowUpRightIcon}
                className="bg-emerald-500 dark:bg-emerald-500"
              />
            </NotificationActions>
          </NotificationRoot>
        </div>
      </div>
    </div>
  )
}
