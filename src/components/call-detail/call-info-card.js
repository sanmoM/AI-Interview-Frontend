import ContentWrapper from '../shared/wrapper/content-wrapper';
import InnerWrapper from '../shared/wrapper/inner-wrapper';
import Badge from '../ui/badge';

export default function CallInfoCard() {
    return (
        <InnerWrapper>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex flex-col gap-2">
                    {/* <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">Completed</span> */}
                    {/* Meta info hidden on mobile/tablet or just inline */}

                    <Badge status="green" className={"text-xs py-1.5 px-3"}>Completed</Badge>
                    <p className='text-sm'>
                        <span className="text-text-gray hidden lg:inline-block ml-2">Date: Today</span>
                        <span className=" text-text-gray hidden lg:inline-block ml-2">Time: 14:12 CET</span>
                        <span className="text-text-gray hidden lg:inline-block ml-2">Duration: 26 min 04 s</span>
                        <span className="text-text-gray hidden lg:inline-block ml-2">Number: +49 173 555 2019</span>
                        <span className="text-text-gray hidden lg:inline-block ml-2">Assigned to: D. Chen</span>
                    </p>
                </div>
                <Badge className={"text-xs py-1.5 px-3"}>High intent</Badge>
            </div>

            <ContentWrapper>
                <p className="text-xs text-text-gray uppercase tracking-wider mb-1">AGENT NOTES</p>
                <p className="text-sm text-text-gray leading-relaxed">
                    Prospect requested an updated pricing deck and maintenance SLA overview to share with leadership this week.
                </p>
            </ContentWrapper>
        </InnerWrapper>
    );
}
