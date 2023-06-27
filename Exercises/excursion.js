function excursion(input) {
    let peopleCountinGroup = Number(input[0]);
    let nightsCount = Number(input[1]);
    let cardsCountForTransport = Number(input[2]);
    let ticketsCount = Number(input[3]);

    let night = 20.00;
    let transportCard = 1.60;
    let musseiTicket = 6.00;

    let nights = nightsCount * night;
    let cardsForTransport = cardsCountForTransport * transportCard;
    let musseiTickets = ticketsCount * musseiTicket;

    let totalPrice = nights + cardsForTransport + musseiTickets;
    let totalPriceForGroup = totalPrice * peopleCountinGroup
    
    let totalPriceWith25Percent = totalPriceForGroup + (totalPriceForGroup * 0.25);

    console.log(totalPriceWith25Percent.toFixed(2));
}

excursion(["20", "14", "30", "6"])