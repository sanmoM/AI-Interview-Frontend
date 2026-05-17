"use client";

import StickyHeader from "@/components/shared/sticky-header";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Avatar from "@/components/ui/avatar";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { use, useEffect, useMemo, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const axios = useAuthAxios();

  // ✅ Fetch data
  useEffect(() => {
    async function fetchVentures() {
      const res = await axios.get("/super/users", {
        params: { page: currentPage },
      });

      setUsers(res?.data?.users || []);
      setLastPage(res?.data?.last_page || 0);
      setCurrentPage(res?.data?.current_page || 1);
    }

    fetchVentures();
  }, [currentPage, axios]);

  // ✅ Derived state (NO useEffect needed)
  const filteredUsers = useMemo(() => {
    if (!searchQuery) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, users]);

  return (
    <SecondaryWrapper className="grow min-w-0 !pt-0 flex flex-col">
      <StickyHeader>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10">
          <div className="mb-3 max-w-5xl">
            <SectionHeading className={"mb-2 lg:mb-4"}>
              All Users
            </SectionHeading>
            <SubHeading className="2xl:text-lg">
              Curate, compare, and operationalize live user pipelines in one
            </SubHeading>
          </div>

          <div className="flex items-center gap-6 w-full lg:w-auto flex-1 xl:flex-none">
            <Searchbox
              placeholder="Search ventures"
              containerClassName="flex-1 md:min-w-[350px]"
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>
      </StickyHeader>

      <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-secondary rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-body">
          <thead class="bg-secondary/50 border-b border-secondary text-primary font-semibold whitespace-nowrap">
            <tr>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Venture
              </th>
              <th scope="col" class="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" class="px-6 py-3 text-right">
                Venture Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length ? (
              filteredUsers.map((user) => (
                <tr
                  class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b last:border-b-0 border-secondary"
                  key={user.id}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    <Avatar
                      text={user?.name.slice(0, 2)}
                      src={
                        user?.image
                          ? IMAGE_BASE_URL + user?.image
                          : "/images/placeholder.jpg"
                      }
                    />
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {user.name}
                  </th>
                  <td class="px-6 py-4">{user.email}</td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {user?.venture?.name}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      className={cn(
                        user?.isPaid
                          ? "text-green-500 bg-green-100"
                          : "text-red-500 bg-red-100",
                        "px-3 py-1 rounded-full text-xs font-medium",
                      )}
                    >
                      {user?.isPaid ? "Paid" : "Free"}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <span
                      className={cn(
                        user?.status === "active"
                          ? "text-green-500 bg-green-100"
                          : "text-red-500 bg-red-100",
                        "px-3 py-1 rounded-full text-xs font-medium",
                      )}
                    >
                      {user?.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <td
                colSpan={6}
                className="text-center text-lg font-medium text-primary w-full py-4"
              >
                No users found
              </td>
            )}
          </tbody>
        </table>
      </div>
    </SecondaryWrapper>
  );
}
