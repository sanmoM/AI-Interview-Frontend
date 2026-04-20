"use client";

import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Button from "@/components/ui/buttons/button";
import ImageInput from "@/components/ui/inputs/image-input";
import TextInput from "@/components/ui/inputs/text-input";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { setUser } from "@/store/features/auth-slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const axios = useAuthAxios();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      if (profilePicture && profilePicture instanceof File) {
        formData.append("image", profilePicture);
      }
      if (password) {
        formData.append("password", password);
      }

      const res = await axios.post("/profile", formData);
      dispatch(setUser(res?.data?.user));
      toast.success("Venture created successfully!");
      // router.back();
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      if (user.image) {
        setProfilePicture(IMAGE_BASE_URL + user.image);
      }
    }
  }, [user]);

  return (
    <SecondaryWrapper>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <ImageInput
          placeholder="Profile picture"
          image={profilePicture}
          setImage={setProfilePicture}
          containerClassName={" w-40 h-40 ml-0 mt-6"}
        />
        <TextInput
          placeholder="Email"
          label="Email"
          value={user?.email}
          readonly
          disabled
          // onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className={"w-fit ml-auto px-6"}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      </form>
    </SecondaryWrapper>
  );
}
