"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Plus,
  Globe,
  MapPin,
  X,
  ChevronDown,
  Check,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import { postJob } from "@/lib/actions/jobs";
import { Form } from "@heroui/react";

export function RegisterCompanyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Controlled Form Inputs State
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [location, setLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [description, setDescription] = useState("");

  // Custom Select States
  const [industryOpen, setIndustryOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("Technology");

  const [employeesOpen, setEmployeesOpen] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState("1-10 employees");

  const [salaryOpen, setSalaryOpen] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState(
    "$80,000 - $110,000 / year",
  );

  // Input elements refs for handling click-outsides
  const industryRef = useRef(null);
  const employeesRef = useRef(null);
  const salaryRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (industryRef.current && !industryRef.current.contains(event.target)) {
        setIndustryOpen(false);
      }
      if (
        employeesRef.current &&
        !employeesRef.current.contains(event.target)
      ) {
        setEmployeesOpen(false);
      }
      if (salaryRef.current && !salaryRef.current.contains(event.target)) {
        setSalaryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleRemote = () => {
    const nextRemoteState = !isRemote;
    setIsRemote(nextRemoteState);
    if (nextRemoteState) {
      setLocation("Remote");
      // Clear location error when flipping switch to remote
      if (errors.location) setErrors((prev) => ({ ...prev, location: "" }));
    } else {
      setLocation("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!websiteUrl.trim()) newErrors.websiteUrl = "Website URL is required.";
    if (!isRemote && !location.trim())
      newErrors.location = "Location is required for non-remote companies.";
    if (!description.trim())
      newErrors.description = "Please provide a brief description.";

    // If there are validation errors, save them to state and block form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitting details:", {
      companyName,
      selectedIndustry,
      websiteUrl,
      location,
      isRemote,
      selectedEmployees,
      selectedSalary,
      description,
    });

    // Reset form states upon successful submit
    setCompanyName("");
    setWebsiteUrl("");
    setLocation("");
    setIsRemote(false);
    setDescription("");
    setSelectedIndustry("Technology");
    setSelectedEmployees("1-10 employees");
    setSelectedSalary("$80,000 - $110,000 / year");
    setErrors({});

    setIsOpen(false);

    const payload = {
      companyName,
      industry: selectedIndustry,
      websiteUrl: `https://${websiteUrl}`,
      location,
      isRemote,
      employeeCount: selectedEmployees,
      estimatedSalary: selectedSalary,
      description,
      status: "active",
      companyID:"companyID_123",
    };

    const res = await postJob(payload);
    if (res.insertId) {
    }
  };

  // Helper to close and reset modal state cleanly
  const handleCloseModal = () => {
    setIsOpen(false);
    setErrors({});
  };

  return (
    <div className="bg-[#09090b] text-zinc-100 flex flex-col items-center justify-center p-4 font-sans">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-semibold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        <Plus size={16} /> Register a company
      </button>

      {/* Interactive Modal Portal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm transition-opacity">
          {/* Modal Container */}
          <div className="w-full max-w-2xl bg-[#121212] border border-zinc-850 rounded-xl text-zinc-100 overflow-hidden shadow-2xl transform scale-100 transition-transform animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 pb-4 flex justify-between items-start border-b border-zinc-900">
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  Register New Company
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Enter your business details to start hiring on HireLoop.
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-white transition-colors p-1.5 hover:bg-zinc-800/60 rounded-lg cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <Form
                id="company-form"
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="flex flex-col w-full">
                    <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        if (errors.companyName)
                          setErrors((prev) => ({ ...prev, companyName: "" }));
                      }}
                      className={`bg-[#1c1c1e] border text-white rounded-lg py-2.5 px-3.5 text-sm outline-none placeholder-zinc-600 transition-colors ${
                        errors.companyName
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-zinc-800 focus:border-zinc-700"
                      }`}
                      placeholder="e.g. Acme Corp"
                    />
                    {errors.companyName && (
                      <span className="text-red-400 text-[11px] mt-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                        <AlertCircle size={12} /> {errors.companyName}
                      </span>
                    )}
                  </div>

                  {/* Industry / Category Custom Dropdown */}
                  <div className="flex flex-col relative" ref={industryRef}>
                    <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                      Industry / Category
                    </label>
                    <button
                      type="button"
                      onClick={() => setIndustryOpen(!industryOpen)}
                      className="bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg py-2.5 px-3.5 text-sm flex justify-between items-center w-full text-left outline-none hover:border-zinc-700 transition-colors cursor-pointer"
                    >
                      <span>{selectedIndustry}</span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-400 transition-transform ${industryOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {industryOpen && (
                      <div className="absolute top-[105%] left-0 right-0 bg-[#1c1c1e] border border-zinc-800 rounded-lg shadow-2xl z-50 py-1 overflow-hidden">
                        {[
                          "Technology",
                          "Finance",
                          "Healthcare",
                          "Education",
                        ].map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelectedIndustry(option);
                              setIndustryOpen(false);
                            }}
                            className="flex items-center justify-between px-3.5 py-2 text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                          >
                            <span>{option}</span>
                            {selectedIndustry === option && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Website URL */}
                  <div className="flex flex-col w-full">
                    <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                      Website URL
                    </label>
                    <div
                      className={`flex rounded-lg overflow-hidden border bg-[#1c1c1e] transition-colors ${
                        errors.websiteUrl
                          ? "border-red-500/60 focus-within:border-red-500"
                          : "border-zinc-800 focus-within:border-zinc-700"
                      }`}
                    >
                      <span className="flex items-center gap-1 bg-zinc-800/40 px-3.5 text-xs text-zinc-400 border-r border-zinc-850 select-none">
                        <Globe size={14} /> https://
                      </span>
                      <input
                        type="text"
                        name="websiteUrl"
                        value={websiteUrl}
                        onChange={(e) => {
                          setWebsiteUrl(e.target.value);
                          if (errors.websiteUrl)
                            setErrors((prev) => ({ ...prev, websiteUrl: "" }));
                        }}
                        className="bg-transparent text-white w-full border-none outline-none py-2.5 px-3.5 text-sm placeholder-zinc-600"
                        placeholder="www.company.com"
                      />
                    </div>
                    {errors.websiteUrl && (
                      <span className="text-red-400 text-[11px] mt-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                        <AlertCircle size={12} /> {errors.websiteUrl}
                      </span>
                    )}
                  </div>

                  {/* Location & Remote Switch */}
                  <div className="flex flex-col w-full gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold text-zinc-300">
                        Location
                      </label>

                      {/* Native Inline Switch */}
                      <div className="flex items-center gap-2 select-none">
                        <span className="text-[11px] text-zinc-400 font-medium">
                          Remote only
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isRemote}
                          onClick={handleToggleRemote}
                          className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${
                            isRemote
                              ? "bg-white"
                              : "bg-zinc-850 border border-zinc-800"
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full shadow-md transition-transform duration-200 ${
                              isRemote
                                ? "translate-x-4 bg-black"
                                : "translate-x-0 bg-zinc-500"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div
                      className={`flex items-center rounded-lg border px-3.5 transition-all ${
                        isRemote
                          ? "border-zinc-800 bg-zinc-900/30 opacity-60 select-none"
                          : errors.location
                            ? "border-red-500/60 bg-[#1c1c1e] focus-within:border-red-500"
                            : "border-zinc-800 bg-[#1c1c1e] focus-within:border-zinc-700"
                      }`}
                    >
                      <MapPin
                        size={16}
                        className={`${isRemote ? "text-zinc-600" : "text-zinc-500"} mr-2 shrink-0`}
                      />
                      <input
                        type="text"
                        name="location"
                        value={location}
                        disabled={isRemote}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          if (errors.location)
                            setErrors((prev) => ({ ...prev, location: "" }));
                        }}
                        className="bg-transparent text-white w-full border-none outline-none py-2.5 text-sm placeholder-zinc-600 disabled:cursor-not-allowed"
                        placeholder={
                          isRemote ? "Remote (Anywhere)" : "City, Country"
                        }
                      />
                    </div>
                    {!isRemote && errors.location && (
                      <span className="text-red-400 text-[11px] flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                        <AlertCircle size={12} /> {errors.location}
                      </span>
                    )}
                  </div>

                  {/* Employee Count Range Custom Dropdown */}
                  <div className="flex flex-col relative" ref={employeesRef}>
                    <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                      Employee Count Range
                    </label>
                    <button
                      type="button"
                      onClick={() => setEmployeesOpen(!employeesOpen)}
                      className="bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg py-2.5 px-3.5 text-sm flex justify-between items-center w-full text-left outline-none hover:border-zinc-700 transition-colors cursor-pointer"
                    >
                      <span>{selectedEmployees}</span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-400 transition-transform ${employeesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {employeesOpen && (
                      <div className="absolute top-[105%] left-0 right-0 bg-[#1c1c1e] border border-zinc-800 rounded-lg shadow-2xl z-50 py-1 overflow-hidden">
                        {[
                          "1-10 employees",
                          "11-50 employees",
                          "51-200 employees",
                          "201-500 employees",
                          "500+ employees",
                        ].map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelectedEmployees(option);
                              setEmployeesOpen(false);
                            }}
                            className="flex items-center justify-between px-3.5 py-2 text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                          >
                            <span>{option}</span>
                            {selectedEmployees === option && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Salary Range Custom Dropdown */}
                  <div className="flex flex-col relative" ref={salaryRef}>
                    <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                      Estimated Salary Range
                    </label>
                    <button
                      type="button"
                      onClick={() => setSalaryOpen(!salaryOpen)}
                      className="bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg py-2.5 px-3.5 text-sm flex justify-between items-center w-full text-left outline-none hover:border-zinc-700 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} className="text-zinc-400" />
                        {selectedSalary}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-400 transition-transform ${salaryOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {salaryOpen && (
                      <div className="absolute top-[105%] left-0 right-0 bg-[#1c1c1e] border border-zinc-800 rounded-lg shadow-2xl z-50 py-1 overflow-hidden">
                        {[
                          "$40,000 - $60,000 / year",
                          "$60,000 - $80,000 / year",
                          "$80,000 - $110,000 / year",
                          "$110,000 - $150,000 / year",
                          "$150,000 - $200,000 / year",
                          "$200,000+ / year",
                        ].map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelectedSalary(option);
                              setSalaryOpen(false);
                            }}
                            className="flex items-center justify-between px-3.5 py-2 text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                          >
                            <span>{option}</span>
                            {selectedSalary === option && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Brief Description */}
                <div className="w-full mt-1">
                  <label className="text-xs font-semibold text-zinc-300 mb-1.5 block">
                    Brief Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description)
                        setErrors((prev) => ({ ...prev, description: "" }));
                    }}
                    className={`w-full bg-[#1c1c1e] rounded-lg p-3.5 min-h-[110px] text-sm focus:outline-none transition-colors resize-none border ${
                      errors.description
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-zinc-800 focus:border-zinc-700"
                    }`}
                    placeholder="Tell us about your company's mission and culture..."
                  />
                  {errors.description && (
                    <span className="text-red-400 text-[11px] mt-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <AlertCircle size={12} /> {errors.description}
                    </span>
                  )}
                </div>
              </Form>
            </div>

            {/* Modal Footer / Actions */}
            <div className="p-6 border-t border-zinc-900 flex justify-end gap-3 bg-[#121212]">
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-white bg-transparent hover:bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="company-form"
                className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Register Company
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
