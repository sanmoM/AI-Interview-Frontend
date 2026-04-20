import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import TextInput from "@/components/ui/inputs/text-input";
import { SERVER_IP } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Domain({ ventureId }) {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const ip = SERVER_IP;

  const axios = useAuthAxios();

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/admin/domain/" + ventureId, {
        domain,
      });
      toast.success("Domain settings saved successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <InnerWrapper className={"break-inside-avoid"}>
      <InnerDivHeader
        Icon={AiOutlineGlobal}
        title="Domain Settings"
        description="Setup your custom domain."
        containerClassName={"mb-6 md:mb-0"}
      />
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold">Custom Domain Setup (Cloudflare)</h1>

        <div className="rounded-2xl border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">1. Enter your domain name</h2>
            <TextInput
              placeholder="eg. example.com"
              label="Domain"
              required
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <Button
              className={"w-fit px-6 py-1.5! text-sm mx-auto"}
              onClick={handleSave}
              loading={loading}
              disabled={loading}
            >
              Save
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">
              2. Add Domain to Cloudflare
            </h2>
            <p>
              Log in to Cloudflare → Click <strong>Add Site</strong> → Enter
              your domain name.
            </p>
          </div>
        </div>

        <div className="rounded-2xl  border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">3. Update Nameservers</h2>
            <p>
              Cloudflare will provide nameservers. Go to your domain registrar
              and replace existing nameservers with Cloudflare ones.
            </p>
          </div>
        </div>

        <div className="rounded-2xl  border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">4. Add DNS Records</h2>
            <p>Add an A record pointing your domain to your server IP:</p>

            <div className="space-y-2">
              <TextInput
                placeholder="10.0.0.1"
                label="IP"
                value={ip}
                readOnly={true}
                required={false}
              />

              <div className="bg-gray-100 p-3 rounded-xl text-sm">
                <p>
                  <strong>Type:</strong> A
                </p>
                <p>
                  <strong>Name:</strong> @
                </p>
                <p>
                  <strong>IP:</strong> {ip || "10.0.0.1"}
                </p>
                <p>
                  <strong>Proxy:</strong> Proxied (optional)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl  border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">5. Add www Record</h2>
            <p>Create a CNAME record for www:</p>

            <div className="bg-gray-100 p-3 rounded-xl text-sm">
              <p>
                <strong>Type:</strong> CNAME
              </p>
              <p>
                <strong>Name:</strong> www
              </p>
              <p>
                <strong>Target:</strong> {domain || "example.com"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl  border border-secondary">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">6. Verify Setup</h2>
            <p>
              Wait for DNS propagation (5–30 minutes). Then open your domain in
              browser.
            </p>
            <Button className={"w-fit px-6 py-1.5! text-sm"}>
              Check Domain
            </Button>
          </div>
        </div>
      </div>
    </InnerWrapper>
  );
}
