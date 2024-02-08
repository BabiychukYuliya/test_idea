console.log("Завдання 2");

const array = [
  {
    balance: 500000,
    term: 1,
    type: "M", // M - місяць, D - день
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 4508000,
    term: 6,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 87500,
    term: 18,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 2503,
    term: 100,
    type: "D",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 126500,
    term: 4,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
];

// balance сума в копійках, потрібно перевести в гривні та зробити суму з пробілами та 2 символами після крапки, наприклад 1 000 000.00

const translatedToUAH = array.map((item) => ({
  ...item,
  balance: (item.balance / 100).toLocaleString("uk-UA", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }),
}));
// console.log(translatedToUAH);

// dateStartUnix перевести у формат 'день.місяць.рік(00.00.0000)' і змінити параметр на dateStart
const transformedStartDate = translatedToUAH.map((item) => ({
  ...item,
  dateStart: new Date(item.dateStartUnix * 1000).toLocaleDateString(),
}));

// dateEnd перекласти у формат '00.00.0000'
const transformedEndDate = transformedStartDate.map((item) => ({
  ...item,
  dateEnd: new Date(item.dateEnd).toLocaleDateString(),
}));
// console.log(transformedEndDate);

const updatedData = transformedEndDate.map((item) => {
  delete item.dateStartUnix;
  return item;
});
// console.log(updatedData);

// записати дані по term, type в об'єкт та додати ключ value зі значенная відповідно до терміну та типу
const addedValue = updatedData.map((item) => ({
  ...item,
  value: `${item.term} ${item.type === "M" ? "місяць" : "день"}`,
}));

// Функція для конвертації місяців в дні перед сортуванням
function convertToDays(term, type) {
  if (type === "M") {
    return term * 30; // Перетворення місяців в дні (приблизно)
  } else {
    return term; // Дні залишаються без змін
  }
}

// відсортувати термін за зростанням по параметру term 1 , 100 , 4 , 6  і тд.
const sortedArray = addedValue.sort((a, b) => {
  const aDays = convertToDays(a.term, a.type);
  const bDays = convertToDays(b.term, b.type);
  return aDays - bDays;
});

console.log(sortedArray);
