import Badge from '../ui/badge'
import { cn } from '@/utils/cn'
export default function BadgeWithText({
    badgeLabel,
    badgeClassName,
    text,
    textClassName,
    containerClassName,
}) {
    return (
        <p className={cn("text-gray-500 max-w-3xl font-medium flex flex-col md:flex-row md:items-center gap-2", containerClassName)}>
            <Badge className={cn("text-[13px] py-1 w-fit mx-auto md:mx-0", badgeClassName)}>
                {badgeLabel}
            </Badge>
            <span className={cn("text-[13px]", textClassName)}>{text}</span>
        </p>
    )
}
