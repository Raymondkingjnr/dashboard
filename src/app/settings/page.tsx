"use client";

import { EditIcon } from "@/assests/icons/menu";
import { UserSvgIcon } from "@/assests/icons/userSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "antd";
// import { Switch } from "@/components/ui/switch";

import React, { useState } from "react";

const Settings = () => {
  const [currentNav, setCurrentNav] = useState<
    "Edit Profile" | "Preferences" | "Security"
  >("Edit Profile");

  const [accountOrder, setAccountOrder] = useState(false);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [receiveToken, SetReceiveToke] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <main className=" py-6 max-h-[700px] px-8 my-12 grid mx-[4rem]  bg-gray-50">
        <div className=" flex gap-5 items-center">
          <span
            className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
            onClick={() => setCurrentNav("Edit Profile")}
          >
            <h3
              className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                currentNav === "Edit Profile"
                  ? "text-main_primary"
                  : "text-light_blue"
              }`}
            >
              Edit Profile
            </h3>
            <span
              className={` absolute ${
                currentNav === "Edit Profile"
                  ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                  : ""
              }`}
            />
          </span>
          <span
            className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
            onClick={() => setCurrentNav("Preferences")}
          >
            <h3
              className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                currentNav === "Preferences"
                  ? "text-main_primary"
                  : "text-light_blue"
              }`}
            >
              Preferences
            </h3>
            <span
              className={` absolute ${
                currentNav === "Preferences"
                  ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                  : ""
              }`}
            />
          </span>

          <span
            className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
            onClick={() => setCurrentNav("Security")}
          >
            <h3
              className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                currentNav === "Security"
                  ? "text-main_primary"
                  : "text-light_blue"
              }`}
            >
              Security
            </h3>
            <span
              className={` absolute ${
                currentNav === "Security"
                  ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                  : ""
              }`}
            />
          </span>
        </div>

        {/*  */}
        {currentNav === "Edit Profile" ? (
          <>
            <main className=" pt-16 flex flex-col md:flex-row gap-10">
              <main className=" grid place-content-center md:place-content-start ">
                <div className="  relative w-[150px] grid place-content-center">
                  <main>
                    <UserSvgIcon />
                    <div className=" absolute right-5 top-[5.5rem]">
                      <EditIcon />
                    </div>
                  </main>
                </div>
              </main>

              <form className=" w-full grid gap-x-4 gap-y-6 md:grid-cols-2   ">
                <div>
                  <p className=" pb-2 font-medium text-base">Your name</p>
                  <Input placeholder="Namer" className="w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">user Name</p>
                  <Input placeholder="Name" className=" w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Email</p>
                  <Input placeholder="example@gmail.com" className=" w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Date Of Birth</p>
                  <Input placeholder="22/90" className=" w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Address</p>
                  <Input
                    placeholder="San Jose, California, USA"
                    className=" w-full"
                  />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">
                    Permanent Address
                  </p>
                  <Input
                    placeholder="San Jose, California, USA"
                    className=" w-full"
                  />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">City</p>
                  <Input placeholder="San Jose" className=" w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Postal Code</p>
                  <Input placeholder="45962" className=" w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Country</p>
                  <Input placeholder="USA" className=" w-full" />
                </div>
              </form>
            </main>
            <div className=" grid place-items-end mt-4">
              <Button className=" bg-main_primary w-[140px] text-base rounded-md px-2 text-center font-medium h-[45px]">
                Save
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* PREFERENCE */}
        {currentNav === "Preferences" ? (
          <>
            <main className=" pt-[4rem]">
              <form className=" w-full grid gap-x-4 gap-y-6 md:grid-cols-2   ">
                <div>
                  <p className=" pb-2 font-medium text-base">Currency</p>
                  <Input placeholder="USD" className="w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">Time Zone</p>
                  <Input
                    placeholder="(GMT-12:00) International Date Line West"
                    className=" w-full"
                  />
                </div>
              </form>
              <div className=" pt-[4rem]">
                <h2 className=" headerText">Notification</h2>
                <main className=" flex flex-col gap-8 pt-4">
                  <span className=" flex items-center gap-4">
                    <Switch
                      checked={receiveToken}
                      onChange={SetReceiveToke}
                      style={{ backgroundColor: receiveToken ? "#16DBCC" : "" }}
                    />
                    <p className=" font-medium text-base text-light_blue">
                      I send or receive digita currency
                    </p>
                  </span>
                  <span className=" flex items-center gap-4">
                    <Switch
                      checked={merchantOrder}
                      onChange={setMerchantOrder}
                      style={{
                        backgroundColor: merchantOrder ? "#16DBCC" : "",
                      }}
                    />
                    <p className=" font-medium text-base text-light_blue">
                      I receive merchant order
                    </p>
                  </span>
                  <span className=" flex items-center gap-4">
                    <Switch
                      checked={accountOrder}
                      onChange={setAccountOrder}
                      style={{ backgroundColor: accountOrder ? "#16DBCC" : "" }}
                    />
                    <p className=" font-medium text-base text-light_blue">
                      There are recommendation for my account
                    </p>
                  </span>
                </main>
              </div>
            </main>
            <div className=" grid place-items-end mt-4">
              <Button className=" bg-main_primary w-[140px] text-base rounded-md px-2 text-center font-medium h-[45px]">
                Save
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* SECURITY */}

        {currentNav === "Security" ? (
          <>
            <main className=" pt-[4rem]">
              <h2 className=" headerText">Two-factor Authentication</h2>
              <span className=" flex items-center gap-4 pt-4">
                <Switch
                  checked={auth}
                  onChange={setAuth}
                  style={{ backgroundColor: auth ? "#16DBCC" : "" }}
                />
                <p className=" font-medium text-base text-light_blue">
                  Enable or disable two factor authentication
                </p>
              </span>
              <form className=" w-full grid gap-x-4 gap-y-6  mt-[3rem] ">
                <h1 className=" headerText pb-5">Current Password</h1>
                <div>
                  <p className=" pb-2 font-medium text-base">Currency</p>
                  <Input placeholder="*****" className="w-full" />
                </div>
                <div>
                  <p className=" pb-2 font-medium text-base">New Password</p>
                  <Input placeholder="****" className=" w-full" />
                </div>
              </form>
            </main>
            <div className=" grid place-items-end mt-4">
              <Button className=" bg-main_primary w-[140px] text-base rounded-md px-2 text-center font-medium h-[45px]">
                Save
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Settings;
