import { Mail, Phone, Search } from "lucide-react";
import { Dept } from "../Types/interfaces";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import { Input } from "./ui/input";

const TableView = ({
  groupedByCity,
}: {
  groupedByCity: Record<string, Dept[]>;
}) => {
  return (
    <div className="space-y-10 hidden md:block">
      {Object.entries(groupedByCity).map(([city, cityDepts]) => {
        const groupedByDepartment = cityDepts.reduce((acc, dept) => {
          if (!acc[dept.department]) acc[dept.department] = [];
          acc[dept.department].push(dept);
          return acc;
        }, {} as Record<string, Dept[]>);

        return (
          <div key={city} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-black mb-4">{city}</h2>

            <div className="bg-white text-sm font-semibold text-orange-600 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
              <div>Departament</div>
              <div>Funcția</div>
              <div>Nume</div>
              <div>ID</div>
              <div>Telefon</div>
              <div>Email</div>
            </div>

            {Object.entries(groupedByDepartment).map(([department, people]) =>
              people.map((person, idx) => (
                <div
                  key={`${person.id}-${idx}`}
                  className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800"
                >
                  <div
                    className={`${
                      idx !== 0 ? "text-transparent" : "font-medium"
                    } ${
                      idx === people.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    {department}
                  </div>
                  <div
                    className={`${
                      idx !== 0 && person.position === people[idx - 1]?.position
                        ? "text-transparent"
                        : ""
                    } ${
                      person.position !== people[idx + 1]?.position
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    {person.position}
                  </div>
                  <div className="font-semibold border-b border-gray-300">
                    {person.name}
                  </div>
                  <div className="border-b border-gray-300">{person.id}</div>
                  <div className="flex items-center border-b border-gray-300">
                    <Phone className="w-4 h-4 mr-1 text-orange-600" />
                    {person.phone}
                  </div>
                  <div className="flex items-center border-b border-gray-300">
                    <Mail className="w-4 h-4 mr-1 text-orange-600" />
                    {person.email}
                  </div>
                </div>
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

const MobileCardView = ({
  groupedByCity,
}: {
  groupedByCity: Record<string, Dept[]>;
}) => {
  return (
    <div className="space-y-10 md:hidden">
      {Object.entries(groupedByCity).map(([city, cityDepts]) => {
        const groupedByDepartment = cityDepts.reduce((acc, dept) => {
          if (!acc[dept.department]) acc[dept.department] = [];
          acc[dept.department].push(dept);
          return acc;
        }, {} as Record<string, Dept[]>);

        return (
          <div key={city} className="bg-white p-4 rounded-lg shadow space-y-6">
            <h2 className="text-xl font-bold text-black mb-2">{city}</h2>

            {Object.entries(groupedByDepartment).map(([department, people]) => (
              <div key={department} className="space-y-2">
                <div className="sticky top-14 bg-white py-1 px-1 border-b border-orange-300 shadow-sm">
                  <div className="text-sm font-semibold text-orange-600">
                    {department}
                  </div>
                </div>

                <div className="space-y-3">
                  {people.map((person) => (
                    <div
                      key={person.id}
                      className="border rounded-lg p-4 bg-gray-50 shadow space-y-2"
                    >
                      <div>
                        <p className="text-xs text-gray-500">Funcția</p>
                        <p>{person.position}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Nume</p>
                        <p className="font-semibold">{person.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">ID</p>
                        <p>{person.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-orange-600" />
                        <span>{person.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-orange-600" />
                        <span>{person.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const GroupedDepts = ({
  apiresp,
}: {
  apiresp: {
    deps: Dept[];
    storeInfo: {};
  };
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filteredDeps = apiresp.deps.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.position.toLowerCase().includes(search.toLowerCase()) ||
      d.city.toLowerCase().includes(search.toLowerCase()) ||
      d.department.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.phone.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase())
  );

  const groupedByCity: Record<string, Dept[]> = {};

  filteredDeps.forEach((dept) => {
    if (!groupedByCity[dept.city]) {
      groupedByCity[dept.city] = [];
    }
    groupedByCity[dept.city].push(dept);
  });
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4 mb-7 p-4">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="bg-gray-300 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded whitespace-nowrap"
          >
            Filtrează rezultatele
          </button>
        </div>

        <div className="w-full max-w-2xl mx-auto lg:absolute  lg:left-1/2 lg:-translate-x-1/2">
          {showFilter && (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-start border w-full"
            >
              <Input
                type="text"
                placeholder="Filtrează după nume, funcție, oraș, departament..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white w-full h-[40px] pl-10 pr-10"
              />
            </form>
          )}
        </div>
      </div>

      {Object.keys(groupedByCity).length === 0 ? (
        <p className="text-gray-500 text-center mt-6">
          Nicio persoană găsită după filtrare.
        </p>
      ) : isDesktop ? (
        <TableView groupedByCity={groupedByCity} />
      ) : (
        <MobileCardView groupedByCity={groupedByCity} />
      )}
    </div>
  );
};

export default GroupedDepts;
