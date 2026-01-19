"use client";

import QuestionAnswer from "@/components/interview/question-answer";
import Loader from "@/components/shared/loader";
import Wrapper from "@/components/shared/wrapper/wrapper";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import useAxios from "@/hooks/useAxios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [session, setSession] = useState(null);
  const { ids } = useParams();
  const [questions, setQuestions] = useState([]);
  const axios = useAxios();
  const ventureId = ids[0];
  const flowId = ids[1];
  const roleId = ids[2];

  const fetchQuestions = async () => {
    // const res = await axios.get(`/questions/${flowId}`);
    const res = await axios.post(`/interview/start/`, {
      venture_slug: "venture-one",
      venture_id: ventureId,
      flow_id: flowId,
      role_id: roleId,
      channel: "web",
    });
    setQuestions(res?.data?.questions);
    setSession(res?.data?.session_id);
    setInitialLoad(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className={"lg:flex-1 flex flex-col gap-4 h-full"}>
      <Wrapper className={"h-full"}>
        {initialLoad ? (
          <Loader />
        ) : (
          <QuestionAnswer
            questions={questions}
            sessionId={session}
            setQuestions={setQuestions}
            flowId={flowId}
          />
        )}
      </Wrapper>
    </div>
  );
}
