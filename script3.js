console.log("Hi!!!!");
user1 = {
  datEnd: "2024-09-17T00:00:00",
  openDate: "2023-04-17T00:00:00",
  repaymentShedule: [
    {
      repaymentDate: "2023-05-09T00:00:00",
      repaymentStatus: "Виконано",
    },
    {
      repaymentDate: "2023-06-09T00:00:00",
      repaymentStatus: "Виконано",
    },
    {
      repaymentDate: "2023-07-09T00:00:00",
      repaymentStatus: "He виконано",
    },
    {
      repaymentDate: "2023-08-09T00:00:00",
      repaymentStatus: "Виконано",
    },
    {
      repaymentDate: "2023-09-09T00:00:00",
      repaymentStatus: "He виконано",
    },
    {
      repaymentDate: "2023-10-09T00:00:00",
      repaymentStatus: "Виконано",
    },
  ],
};

function amountOfPayment(user1) {
  let completedPayments = 0;

  const dateStart = new Date(user1.openDate);
  const dateEnd = new Date(user1.datEnd);

  for (let payment of user1.repaymentShedule) {
    const paymentDate = new Date(payment.repaymentDate);

    if (
      payment.repaymentStatus === "Виконано" &&
      paymentDate >= dateStart &&
      paymentDate <= dateEnd
    ) {
      completedPayments += 1;
    }
  }
  // всього платежів за вказаний період === кількість місяців у цьому періоді

  const totalPayments =
    (dateEnd.getFullYear() - dateStart.getFullYear()) * 12 +
    (dateEnd.getMonth() - dateStart.getMonth());

  // залишилось платежів
  const remainingPayments = totalPayments - completedPayments;

  return [
    {
      value: completedPayments,
      text: `${completedPayments} з ${totalPayments}`,
    },
    {
      value: remainingPayments,
      text: `залишилось ${remainingPayments} пталежів`,
    },
  ];
}
console.log(amountOfPayment(user1));
