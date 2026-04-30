// "use client";

// import Loader from "@/components/shared/loader";
// import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
// import SectionHeading from "@/components/ui/headings/section-heading";
// import SubHeading from "@/components/ui/headings/sub-heading";
// import Roles from "@/components/ventures/single-venture/roles";
// import UpdateVenture from "@/components/ventures/single-venture/update-venture";
// import { IMAGE_BASE_URL } from "@/config";
// import useAuthAxios from "@/hooks/useAuthAxios";
// import { useEffect, useState } from "react";

// export default function VentureDetailPage() {
//   const [initialLoad, setInitialLoad] = useState(true);
//   const [venture, setVenture] = useState({});
//   const axios = useAuthAxios();

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(1);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [websiteLink, setWebsiteLink] = useState("");
//   const [logo, setLogo] = useState(null);

//   const fetchVenture = async () => {
//     const res = await axios.get(`/admin/venture-profile`);
//     const venture = res?.data?.venture;
//     venture.branding = JSON.parse(venture.branding_json);
//     delete venture.branding_json;
//     setVenture(venture);
//     setInitialLoad(false);
//     setName(venture?.name);
//     setStatus(venture?.status);
//     setDescription(venture?.branding?.description);
//     setWebsiteLink(venture?.branding?.websiteLink);
//     if (venture?.branding?.logo) {
//       setLogo(IMAGE_BASE_URL + venture?.branding?.logo);
//     }
//   };

//   useEffect(() => {
//     fetchVenture();
//   }, [axios]);

//   return (
//     <SecondaryWrapper loading={initialLoad}>
//       {initialLoad ? (
//         <Loader />
//       ) : (
//         <>
//           <div className="flex flex-1 flex-col 2xl:flex-row justify-between gap-6 mb-8">
//             <div className="">
//               <div className="flex flex-col md:flex-row items-start gap-5">
//                 <div className="w-14 h-14 rounded-3xl bg-secondary flex items-center justify-center shrink-0 text-xl text-primary">
//                   {venture.name?.[0]}
//                 </div>
//                 <div>
//                   <SectionHeading className="!mb-1 text-text-primary tracking-tight">
//                     {venture?.name}
//                   </SectionHeading>
//                   <SubHeading className="text-text-gray font-normal leading-relaxed">
//                     {venture?.branding?.description}
//                   </SubHeading>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-[60%_40%] gap-6 items-start">
//             <UpdateVenture
//               name={name}
//               status={status}
//               description={description}
//               websiteLink={websiteLink}
//               logo={logo}
//               loading={loading}
//               setLoading={setLoading}
//               setName={setName}
//               setStatus={setStatus}
//               setDescription={setDescription}
//               setWebsiteLink={setWebsiteLink}
//               setLogo={setLogo}
//               id={venture.id}
//             />
//             <Roles data={venture} fetchVenture={fetchVenture} />
//           </div>
//         </>
//       )}
//     </SecondaryWrapper>
//   );
// }

"use client";

import Loader from "@/components/shared/loader";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Domain from "@/components/ventures/single-venture/domain";
import Roles from "@/components/ventures/single-venture/roles";
import UpdateVenture from "@/components/ventures/single-venture/update-venture";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useMemo, useState } from "react";

export default function VentureDetailPage() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [venture, setVenture] = useState({});

  const axios = useAuthAxios();

  const fetchVenture = useMemo(() => {
    return async () => {
      try {
        const res = await axios.get(`/admin/venture-profile`);
        const ventureData = res?.data?.venture;
        const ip = res?.data?.ip;

        ventureData.branding = JSON.parse(ventureData.branding_json);
        delete ventureData.branding_json;

        setVenture(ventureData);
      } catch (err) {
      } finally {
        setInitialLoad(false);
      }
    };
  }, [axios]);

  useEffect(() => {
    fetchVenture();
  }, [axios, fetchVenture]);

  return (
    <SecondaryWrapper loading={initialLoad}>
      {initialLoad ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-1 flex-col 2xl:flex-row justify-between gap-6 mb-8">
            <div>
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-3xl bg-secondary flex items-center justify-center shrink-0 text-xl text-primary">
                  {venture?.name?.[0]}
                </div>
                <div>
                  <SectionHeading className="!mb-1 text-text-primary tracking-tight">
                    {venture?.name}
                  </SectionHeading>
                  <SubHeading className="text-text-gray font-normal leading-relaxed">
                    {venture?.branding?.description}
                  </SubHeading>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:columns-2 gap-6 items-start space-y-6">
            <UpdateVenture
              venture={venture}
              setVenture={setVenture}
              hasBannedButton={false}
              hasAdminDetails={false}
              hasDomain={false}
            />
            <div className="hidden lg:block">
              <Roles data={venture} fetchVenture={fetchVenture} />
            </div>
            <Domain ventureId={venture.id} domain={venture.domain} />
            <div className="lg:hidden">
              <Roles data={venture} fetchVenture={fetchVenture} />
            </div>
          </div>
        </>
      )}
    </SecondaryWrapper>
  );
}
