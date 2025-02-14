"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { StepProps, FormData as FormDataType } from "@/utils/types";
import { BiCloudDownload, BiEnvelope } from "react-icons/bi";

const Step2: React.FC<StepProps> = ({ nextStep, prevStep, formData, setFormData, errors }) => {
    const [image, setImage] = useState<string | null>(formData.avatar || null);
    const [dragActive, setDragActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    useEffect(() => {
        setImage(formData.avatar);
    }, [formData.avatar]);

    const uploadToCloudinary = useCallback(async (file: File) => {
        const cformData = new FormData();
        cformData.append("file", file);
        cformData.append("upload_preset", UPLOAD_PRESET!);

        try {
            const response = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: cformData,
            });

            if (!response.ok) throw new Error("Upload failed");

            const data = await response.json();
            const imageUrl = data.secure_url as string;

            setImage(imageUrl);
            setFormData((prev: FormDataType) => ({ ...prev, avatar: imageUrl }));
            localStorage.setItem("avatar", imageUrl);
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            alert("Failed to upload image. Please try again.");
        }
    }, [setFormData, UPLOAD_PRESET, CLOUDINARY_URL]);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);

        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            uploadToCloudinary(file);
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            uploadToCloudinary(file);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormDataType) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-6 rounded-3xl border border-[#0E464F] bg-[#08252B]">
            <div className="flex flex-col gap-6">
                <div className="border border-[#07373F] rounded-3xl px-6 pt-6 pb-12 bg-[#052228]">
                    <h1 className="mb-8">Upload Profile Photo</h1>
                    <div className="h-[200px] flex justify-center items-center bg-black bg-opacity-20">
                        <div
                            className={`h-[240px] w-[240px] rounded-[32px] bg-[#0E464F] border-4 flex justify-center items-center relative transition-all overflow-hidden ${dragActive ? "border-[#24A0B5]" : "border-[rgba(36,160,181,0.5)]"
                                }`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setDragActive(true);
                            }}
                            onDragLeave={() => setDragActive(false)}
                            onDrop={handleDrop}
                            onMouseEnter={() => {
                                setIsHovered(true);
                                fileInputRef.current?.focus();
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />
                            {image && (
                                <Image
                                    src={image}
                                    alt="Preview"
                                    sizes="100vw"
                                    height={240}
                                    width={240}
                                    className="rounded-[28px] w-full h-auto"
                                />
                            )}

                            <div
                                className={`absolute flex flex-col items-center justify-center p-6 text-white transition-opacity duration-300 h-full rounded-[32px] ${(isHovered && image) || !image ? "opacity-100" : "opacity-0"
                                    } ${isHovered && image ? "bg-black bg-opacity-30" : ""}`}
                            >
                                <BiCloudDownload className="text-3xl" />
                                <label htmlFor="fileInput" className="text-white text-center cursor-pointer">
                                    Drag & drop or click to upload
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#07373F] h-1"></div>

                <div className="flex flex-col gap-2">
                    <h1>Enter your name</h1>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-transparent p-3 rounded-xl border border-[#07373F]"
                    />
                    {errors?.fullName && <p className="text-red-500 text-sm">{errors?.fullName}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <h1>Enter your email *</h1>
                    <div className="relative w-full">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="hello@avioflagos.io"
                            className="w-full bg-transparent p-3 pl-12 rounded-xl border border-[#07373F] placeholder:text-white"
                            required
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center px-2">
                            <BiEnvelope className="text-2xl" />
                        </div>
                    </div>
                    {errors?.email && <p className="text-red-500 text-sm">{errors?.email}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <h1>Special Request?</h1>
                    <textarea
                        name="specialRequest"
                        value={formData.specialRequest || ""}
                        onChange={handleInputChange}
                        className="w-full bg-transparent p-3 rounded-xl border border-[#07373F]"
                        rows={3}
                    />
                </div>

                <div className="flex gap-6 w-full flex-col md:flex-row">
                    <button className="rounded-lg px-6 py-3 w-full border border-[#24A0B5] text-[#24A0B5]" onClick={prevStep} style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                        Back
                    </button>
                    <button className="rounded-lg px-6 py-3 w-full bg-[#24A0B5] text-white" onClick={nextStep} style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                        Get My Free Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;