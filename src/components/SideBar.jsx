import React, { useState } from "react";
import { Settings } from 'lucide-react';
import { SquareActivity } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Moon } from 'lucide-react';
import { MessageSquareWarning } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { Link } from "react-router";
import {
  CirclePlus,
  Clapperboard,
  Globe,
  Heart,
  House,
  LayoutGrid,
  Menu,
  Search,
  Send,
  UserPen
} from "lucide-react";

export const main = [
  { icon: House, list: "Главная" },
  { icon: Clapperboard, list: "Reels" },
  { icon: Send, list: "Сообщения" },
  { icon: Search, list: "Поиск" },
  { icon: Globe, list: "Интересное" },
  { icon: Heart, list: "Уведомления" },
  { icon: CirclePlus, list: "Создать" },
  { icon: UserPen, list: "Профиль" },
  { icon: Menu, list: "Еще" },
  { icon: LayoutGrid, list: "Другие продукты" },
];
const SideBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className="h-screen">
      <div className="group w-20 hover:w-64 h-full overflow-hidden transition-all duration-500">
        <div className="mt-6">
          {main.map((item, index) => {
            const Icon = item.icon;
            const Mir = item.list === "Еще";

            return (
              <div
                key={index}
                onClick={() => Mir && setOpen(!open)}
                className="px-5 py-5 flex items-center gap-4 hover:bg-gray-100 rounded-lg transition-all duration-400"
              >
                <Icon size={24} />
                <Link >
                  <span className="hidden group-hover:block ">
                    {item.list}
                  </span>
                </Link>


                {Mir && open && (
                  <div className=" absolute left-5  top-17 hidden group-hover:block  bg-white shadow-lg rounded-3xl h-130 w-75 z-30">
                    <div className=" pt-7">
                      <div className="flex  ps-5 gap-4 itmes-center ">
                        <Settings className="w-8 h-8" />
                        <h1 className="text-2xl">Settings</h1>
                      </div>

                      <div className="flex ps-5 gap-4 pt-7 itmes-center ">
                        <SquareActivity className="w-8 h-8" />
                        <h1 className="text-2xl">Your activity</h1>
                      </div>

                      <div className="flex ps-5 gap-4 pt-7 itmes-center ">
                        <Bookmark className="w-8 h-8" />
                        <h1 className="text-2xl">Saved</h1>
                      </div>

                      <div className="flex ps-5 gap-4 pt-7 itmes-center ">
                        <Moon className="w-8 h-8" />
                        <h1 className="text-2xl">Switch appearance</h1>
                      </div>

                      <div className="flex ps-5 gap-4 pt-7 itmes-center ">
                        <MessageSquareWarning className="w-8 h-8" />
                        <h1 className="text-2xl">Report a problem</h1>
                      </div>
                      <div className="pt-3">
                        <div className="bg-gray-400 w-75 h-2"></div>
                      </div>
                      <div className="flex ps-5 gap-4 pt-5 itmes-center ">
                        <AtSign className="w-8 h-8" />
                        <h1 className="text-2xl">Report a problem</h1>
                      </div>
                      <div className="pt-3">
                        <div className="bg-gray-400 w-75 h-2"></div>
                      </div>
                      <h1 className="text-2xl ps-6 pt-5">Switch accounts</h1>
                      <div className="pt-3">
                        <div className="bg-gray-400 w-75 h-1"></div>
                      </div>
                      <h1 className="text-2xl ps-6 pt-3">Log out</h1>
                    </div>
                  </div>
                )}
              </div>


            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SideBar;
