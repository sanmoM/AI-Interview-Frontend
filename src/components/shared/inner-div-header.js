import { cn } from '@/utils/cn'
import Badge from '../ui/badge'

export default function InnerDivHeader({ Icon, title, description, badgeLabel, containerClassName }) {
    return (
        <div className={cn("mb-6 md:mb-0", containerClassName)}>
            <div className="flex justify-between items-center md:items-start mb-2 md:mb-6">
                <div className="flex items-center md:items-start gap-4 w-full">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-wrap justify-between items-center gap-1'>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{title}</h2>
                            <Badge className={"text-[10px] p-1 px-3 font-medium md:hidden"}>
                                {badgeLabel}
                            </Badge>

                        </div>

                        <p className="text-text-gray mt-0.5 hidden md:block">{description}</p>
                    </div>
                </div>
                <Badge className={"text-xs p-1 px-3 font-medium hidden md:block"}>
                    {badgeLabel}
                </Badge>
            </div>
            <p className="text-text-gray text-sm md:hidden">{description}</p>
        </div>
    )
}
