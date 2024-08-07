import React from "react";

export default function HomePage() {
  const tabMenuList = [
    "General",
    "Profile",
    "Security",
    "Notification",
    "Billing",
  ];

  const [activeMenu, setActiveMenu] = React.useState("General");

  return (
    <React.Fragment>
      <div className="py-10 px-20">
        <p className="text-2xl font-semibold text-accent">Settings</p>

        <div className="flex mt-10">
          {tabMenuList.map((menu) => (
            <div
              key={menu}
              className={`px-5 py-2 cursor-pointer flex items-center rounded-md ${
                activeMenu === menu ? "bg-accent !text-[#fff] text-xs" : ""
              }`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </div>
          ))}
        </div>

        {activeMenu === "General" && (
          <div className="mt-10">
            <p className="text-lg text-accent mb-5">General settings</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              repellat, architecto neque sequi sapiente maiores laborum quam
              deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil
              suscipit repellendus impedit! Vel nihil totam illum praesentium
              eveniet quidem tempore omnis soluta animi dolorum provident aut
              libero, numquam magni, eum veritatis ab voluptatem ducimus.
            </p>
          </div>
        )}

        {activeMenu === "Profile" && (
          <div className="mt-10">
            <p className="text-lg text-accent mb-5">Profile settings</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              repellat, architecto neque sequi sapiente maiores laborum quam
              deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil
              suscipit repellendus impedit! Vel nihil totam illum praesentium
              eveniet quidem tempore omnis soluta animi dolorum provident aut
              libero, numquam magni, eum veritatis ab voluptatem ducimus.
            </p>
          </div>
        )}

        {activeMenu === "Security" && (
          <div className="mt-10">
            <p className="text-lg text-accent mb-5">Security settings</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              repellat, architecto neque sequi sapiente maiores laborum quam
              deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil
              suscipit repellendus impedit! Vel nihil totam illum praesentium
              eveniet quidem tempore omnis soluta animi dolorum provident aut
              libero, numquam magni, eum veritatis ab voluptatem ducimus.
            </p>
          </div>
        )}

        {activeMenu === "Notification" && (
          <div className="mt-10">
            <p className="text-lg text-accent mb-5">Notification settings</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              repellat, architecto neque sequi sapiente maiores laborum quam
              deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil
              suscipit repellendus impedit! Vel nihil totam illum praesentium
              eveniet quidem tempore omnis soluta animi dolorum provident aut
              libero, numquam magni, eum veritatis ab voluptatem ducimus.
            </p>
          </div>
        )}

        {activeMenu === "Billing" && (
          <div className="mt-10">
            <p className="text-lg text-accent mb-5">Billing settings</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              repellat, architecto neque sequi sapiente maiores laborum quam
              deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil
              suscipit repellendus impedit! Vel nihil totam illum praesentium
              eveniet quidem tempore omnis soluta animi dolorum provident aut
              libero, numquam magni, eum veritatis ab voluptatem ducimus.
            </p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
