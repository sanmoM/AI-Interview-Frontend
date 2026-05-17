"use client";

import Pagination from "@/components/shared/pagination";
import StickyHeader from "@/components/shared/sticky-header";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Avatar from "@/components/ui/avatar";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { cn } from "@/utils/cn";
import { useEffect, useMemo, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const axios = useAuthAxios();

  // ✅ Fetch data
  useEffect(() => {
    async function fetchVentures() {
      const res = await axios.get("/super/transactions", {
        params: { page: currentPage },
      });

      setTransactions(res?.data?.transactions?.data || []);
      setLastPage(res?.data?.last_page || 0);
      setCurrentPage(res?.data?.current_page || 1);
    }

    fetchVentures();
  }, [currentPage, axios]);

  // ✅ Derived state (NO useEffect needed)
  const filteredUsers = useMemo(() => {
    if (!searchQuery) return transactions;

    return transactions.filter((user) =>
      user.transaction_id?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, transactions]);

  console.log(transactions);

  return (
    <SecondaryWrapper className="grow min-w-0 !pt-0 flex flex-col">
      <StickyHeader>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10">
          <div className="mb-3 max-w-5xl">
            <SectionHeading className={"mb-2 lg:mb-4"}>
              All Transactions
            </SectionHeading>
            <SubHeading className="2xl:text-lg">
              Curate, compare, and operationalize live transaction pipelines in
            </SubHeading>
          </div>

          <div className="flex items-center gap-6 w-full lg:w-auto flex-1 xl:flex-none">
            <Searchbox
              placeholder="Search transactions"
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
                User
              </th>
              <th scope="col" class="px-6 py-3">
                Venture
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Method
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-right">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length ? (
              filteredUsers.map((transaction) => (
                <tr
                  class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b last:border-b-0 border-secondary"
                  key={transaction.id}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {transaction.user?.name}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {transaction.user?.venture?.name}
                  </th>
                  <td class="px-6 py-4">{transaction.transaction_id}</td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {transaction?.amount}
                  </td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {transaction?.type}
                  </td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {transaction?.payment_method}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      className={cn(
                        transaction?.status === "pending"
                          ? "text-yellow-500 bg-yellow-100"
                          : transaction?.status === "failed"
                            ? "text-red-500 bg-red-100"
                            : "text-green-500 bg-green-100",
                        "px-3 py-1 rounded-full text-xs font-medium",
                      )}
                    >
                      {transaction?.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right whitespace-nowrap">
                    {transaction?.note}
                  </td>
                </tr>
              ))
            ) : (
              <td
                colSpan={8}
                className="text-center text-lg font-medium text-primary w-full py-4 text-nowrap"
              >
                No users found
              </td>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        size="sm"
        containerClassName={"2xl:mt-20"}
        lastPage={lastPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </SecondaryWrapper>
  );
}
