import { BsPencil, BsStars } from "react-icons/bs";
import InnerDivHeader from '../shared/inner-div-header';
import InnerWrapper from '../shared/wrapper/inner-wrapper';
import BorderButton from "../ui/buttons/border-button";
import Badge from "../ui/badge";
import ContentWrapper from "../shared/wrapper/content-wrapper";

export default function SummaryColumn() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={BsStars}
                title="Summary"
                description="AI-generated overview of intent, risks, and next steps."
                badgeComponent={<BorderButton className="flex items-center gap-2 px-4 w-full 2xl:w-fit !py-2 !text-sm">
                    <BsPencil size={16} />
                    <span className="inline">Refine summary</span>
                </BorderButton>}
            />

            <div className="flex flex-wrap gap-2 mb-6">
                <Badge className={"text-[11px] py-1 px-2"}>
                    Intent · High
                </Badge>
                <Badge className={"text-[11px] py-1 px-2"}>
                    Stage · Pilot scoping
                </Badge>
                <Badge status="gray" className={"text-[11px] py-1 px-2"}>
                    Channel · Inbound
                </Badge>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-4">
                <Badge status="gray" className={"w-full text-sm md:text-base 2xl:text-lg"}>
                    Region · Berlin
                </Badge>
                <Badge status="red" className={"w-full text-sm md:text-base 2xl:text-lg"}>
                    Risks · Budget approval
                </Badge>
            </div>

            <h3 className="text-lg text-text-primary mb-4">Overview</h3>
            <ContentWrapper>
                <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">Call objective</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Lena, operations lead at UrbanMove Berlin, is evaluating Aurora for a 30-scooter pilot with potential expansion to 80–100 vehicles. She needs clear pilot pricing, maintenance coverage details, and a concise deck for internal decision makers.
                    </p>
                </div>


                <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">Key points</h3>
                    <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1.5 leading-relaxed marker:text-gray-400">
                        <li>Comparing Aurora against two incumbent providers on total cost and support responsiveness.</li>
                        <li>Interested in a 3–6 month pilot focused on Berlin's inner ring with room to scale.</li>
                        <li>Maintenance SLAs and on-the-ground repair times are critical selection criteria.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">Risks & blockers</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Budget approval timeline matches the pilot launch goal, so speed of proposal is key.
                    </p>
                </div>
            </ContentWrapper>

            <div className="mt-6 flex flex-col gap-3 2xl:gap-0 2xl:flex-row items-center justify-between">
                {/* <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">Outcome · High intent</span> */}
                <Badge status="green" className="text-xs font-bold">Outcome · High intent</Badge>
                <p className="text-sm font-medium text-text-gray">Ready to progress to pilot proposal.</p>
                <button className="text-sm font-medium text-primary hover:text-blue-900 flex items-center gap-2">
                    Share summary
                </button>
            </div>
        </InnerWrapper>
    );
}
