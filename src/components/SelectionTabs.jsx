import { mealTypes } from "../constant/constant"

const SelectionTabs = ({ selectedMealType, setSelectedMealType }) => {
    return (
         <div className="d-flex flex-wrap gap-2 my-4 justify-content-center">
                  <span
                    className={`badge fs-6 p-2 ${
                      selectedMealType === "All"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedMealType("All")}
                  >
                    All
                  </span>
        
                  {mealTypes.map((meal) => (
                    <span
                      key={meal}
                      className={`badge fs-6 p-2 ${
                        selectedMealType === meal
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedMealType(meal)}
                    >
                      {meal}
                    </span>
                  ))}
                </div>
    )
}

export default SelectionTabs;