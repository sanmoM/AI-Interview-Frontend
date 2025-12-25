import BadgeWithText from '@/components/shared/badge-with-text';
import ContentFooterLayout from '@/components/shared/content-footer-layout';
import SecondaryWrapper from '@/components/shared/wrapper/secondary-wrapper';
import BorderButton from '@/components/ui/buttons/border-button';
import Button from '@/components/ui/buttons/button';
import SectionHeading from '@/components/ui/headings/section-heading';
import SubHeading from '@/components/ui/headings/sub-heading';
import QuestionEditor from '@/components/ventures/single-venture/questions/question-editor';
import QuestionsLayout from '@/components/ventures/single-venture/questions/questions-layout';
import QuestionsSidebar from '@/components/ventures/single-venture/questions/questions-sidebar';

export default function QuestionsPage() {
    return (
        <SecondaryWrapper>
            <div className="mb-6">
                <SectionHeading>
                    Interview questions & variations
                </SectionHeading>
                <SubHeading>
                    Edit the questions for this venture. Ground them in your knowledge, let AI suggest improvements, and control how the assistant behaves during the interview.
                </SubHeading>
            </div>

            <QuestionsLayout
                sidebar={<QuestionsSidebar />}
            >
                <QuestionEditor />
            </QuestionsLayout>
            <ContentFooterLayout
                badgeLabel="Step 3 · Interview questions"
                badgeText="Finish setup and publish venture"
            >
                <BorderButton className={"!text-sm !px-6 !py-2"}>
                    Back
                </BorderButton>
                <Button className={"!text-sm !px-6 !py-2"}>
                    Save changes
                </Button>
            </ContentFooterLayout>
        </SecondaryWrapper>
    );
}
