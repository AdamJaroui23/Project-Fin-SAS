const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let prompt = require("prompt-sync")();

let tickets = [];

let nextTicketId = 1;

function afficherMenu() {
    console.log("\n=============================");
    console.log("     RAILWAY MANAGER");
    console.log("=============================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. Statistiques");
    console.log("0. Quitter");
    console.log("=============================\n");
}

function afficherTrajets(trips) {
    console.log("\n=== LISTE DES TRAJETS ===\n");

    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];

        console.log("#" + trip.id + " " + trip.departure + " → " + trip.destination);
        console.log("Départ : " + trip.departureTime);
        console.log("Arrivée : " + trip.arrivalTime);
        console.log("Prix : " + trip.price + " DH");
        console.log("Places disponibles : " + trip.availableSeats);
        console.log("-----------------------------");
    }
}

function rechercheTrajet(trips, idTrajet) {
    let trajet = null;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === idTrajet) {
            trajet = trips[i];
            break;
        }
    }

    if (trajet) {
        console.log("\n=== TRAJET TROUVÉ ===");
        console.log("#" + trajet.id + " " + trajet.departure + " → " + trajet.destination);
        console.log("Départ : " + trajet.departureTime);
        console.log("Arrivée : " + trajet.arrivalTime);
        console.log("Prix : " + trajet.price + " DH");
        console.log("Places disponibles : " + trajet.availableSeats);
    } else {
        console.log("Aucun trajet trouvé pour cet id.");
    }

    return trajet;
}

function siPlaceDispo(trips, idTrajet) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === idTrajet) {
            return trips[i].availableSeats > 0;
        }
    }

    return false;
}

function créeTicket(trajet) {
    let passengerName = prompt(
        "Donner le nom du passager pour acheter un ticket : "
    );

    if (passengerName.trim() === "") {
        console.log("Le nom du passager ne peut pas être vide.");
        return null;
    }

    passengerName = passengerName.trim();

    let seatNumber = 0;

    for (let seat = 1; seat <= 50; seat++) {
        let seatTaken = false;

        for (let i = 0; i < tickets.length; i++) {
            if (
                tickets[i].tripId === trajet.id &&
                tickets[i].seatNumber === seat
            ) {
                seatTaken = true;
                break;
            }
        }

        if (!seatTaken) {
            seatNumber = seat;
            break;
        }
    }

    if (seatNumber === 0) {
        console.log("Aucune place disponible.");
        return null;
    }

    let ticket = {
        idTicket: nextTicketId,
        passengerName: passengerName,
        tripId: trajet.id,
        seatNumber: seatNumber,
        price: trajet.price
    };

    nextTicketId++;

    tickets.push(ticket);

    trajet.availableSeats--;

    console.log("\nTicket acheté avec succès.");
    console.log("Ticket #" + ticket.idTicket);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");

    return ticket;
}

function achetterTicket(trips) {
    let input = prompt("Donner l'id du trajet : ");

    if (input.trim() === "") {
        console.log("Veuillez entrer un identifiant.");
        return null;
    }

    let idTrajet = Number(input);

    if (isNaN(idTrajet)) {
        console.log("L'identifiant doit être un nombre.");
        return null;
    }

    let trajet = rechercheTrajet(trips, idTrajet);

    if (!trajet) {
        return null;
    }

    if (!siPlaceDispo(trips, idTrajet)) {
        console.log("Train complet.");
        return null;
    }

    return créeTicket(trajet);
}

function afficherTickets(tickets) {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    console.log("\n=== TICKETS ===\n");

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let trajet = null;

        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === ticket.tripId) {
                trajet = trips[j];
                break;
            }
        }

        if (!trajet) {
            console.log("Trajet associé au ticket #" + ticket.idTicket + " introuvable.");
            continue;
        }

        console.log("Ticket #" + ticket.idTicket);
        console.log("Passager : " + ticket.passengerName);
        console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
        console.log("Place : " + ticket.seatNumber);
        console.log("Prix : " + ticket.price + " DH");
        console.log("-----------------------------");
    }
}

function rechercheTicketParId(tickets) {
    let input = prompt("Donner l'id du ticket : ");

    if (input.trim() === "") {
        console.log("Veuillez entrer un identifiant.");
        return null;
    }

    let idTicket = Number(input);

    if (isNaN(idTicket)) {
        console.log("L'identifiant doit être un nombre.");
        return null;
    }

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].idTicket === idTicket) {
            return tickets[i];
        }
    }

    console.log("Ticket introuvable.");
    return null;
}

function annulerTicket(tickets) {
    let ticket = rechercheTicketParId(tickets);

    if (!ticket) {
        return null;
    }

    let index = -1;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i] === ticket) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Ticket introuvable.");
        return null;
    }

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === ticket.tripId) {
            trips[i].availableSeats++;
            break;
        }
    }

    for (let i = index; i < tickets.length - 1; i++) {
        tickets[i] = tickets[i + 1];
    }

    tickets.length--;

    console.log("Ticket #" + ticket.idTicket + " annulé avec succès.");

    return ticket;
}

function rechercheTicketsParNom(tickets) {
    let nom = prompt("Donner le nom du passager : ");

    if (nom.trim() === "") {
        console.log("Le nom ne peut pas être vide.");
        return false;
    }

    nom = nom.trim().toLowerCase();

    let ticketTrouve = false;

    for (let i = 0; i < tickets.length; i++) {
        if (nom === tickets[i].passengerName.toLowerCase()) {
            ticketTrouve = true;

            let ticket = tickets[i];
            let trajet = null;

            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === ticket.tripId) {
                    trajet = trips[j];
                    break;
                }
            }

            if (!trajet) {
                console.log("Trajet associé introuvable.");
                continue;
            }

            console.log("\nNom du passager : " + ticket.passengerName);
            console.log("Ticket #" + ticket.idTicket);
            console.log("Passager : " + ticket.passengerName);
            console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
            console.log("Place : " + ticket.seatNumber);
            console.log("Prix : " + ticket.price + " DH");
            console.log("-----------------------------");
        }
    }

    if (!ticketTrouve) {
        console.log("Aucun ticket trouvé pour ce passager.");
    }

    return ticketTrouve;
}

function filtrerParVille(trips) {
    let city = prompt("Donner la ville de départ : ");

    if (city.trim() === "") {
        console.log("La ville ne peut pas être vide.");
        return false;
    }

    city = city.trim().toLowerCase();

    let trouve = false;

    console.log("\nRésultat :\n");

    for (let i = 0; i < trips.length; i++) {
        if (city === trips[i].departure.toLowerCase()) {
            trouve = true;

            console.log(
                trips[i].departure +
                " → " +
                trips[i].destination +
                " : " +
                trips[i].price +
                " DH"
            );
        }
    }

    if (!trouve) {
        console.log("Aucune ville de départ trouvée.");
    }

    return trouve;
}

function triPrixCroissant(trips) {
    for (let i = 0; i < trips.length - 1; i++) {
        for (let j = 0; j < trips.length - 1 - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                let trajet = trips[j];

                trips[j] = trips[j + 1];
                trips[j + 1] = trajet;
            }
        }
    }

    console.log("\n=== TRAJETS TRIÉS PAR PRIX CROISSANT ===\n");

    for (let i = 0; i < trips.length; i++) {
        console.log(
            "#" +
            trips[i].id +
            " " +
            trips[i].departure +
            " → " +
            trips[i].destination +
            " : " +
            trips[i].price +
            " DH"
        );
    }

    return trips;
}

function totalTicket(tickets) {
    return "Nombre total de tickets : " + tickets.length;
}

function chiffreAffaires(tickets) {
    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        total += tickets[i].price;
    }

    return total;
}

function mostSells(tickets, trips) {
    if (tickets.length === 0) {
        console.log("Aucun ticket vendu.");
        return null;
    }

    let bestTripId = tickets[0].tripId;
    let bestCount = 0;

    for (let i = 0; i < tickets.length; i++) {
        let count = 0;

        for (let j = 0; j < tickets.length; j++) {
            if (tickets[i].tripId === tickets[j].tripId) {
                count++;
            }
        }

        if (count > bestCount) {
            bestCount = count;
            bestTripId = tickets[i].tripId;
        }
    }

    let bestTrip = null;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === bestTripId) {
            bestTrip = trips[i];
            break;
        }
    }

    if (!bestTrip) {
        console.log("Trajet le plus vendu introuvable.");
        return null;
    }

    console.log("\nTrajet le plus vendu :");
    console.log(bestTrip.departure + " → " + bestTrip.destination);
    console.log(bestCount + " tickets vendus");

    return bestTripId;
}

function stats() {
    console.log("\n=== STATISTIQUES ===\n");

    console.log(totalTicket(tickets));

    console.log(
        "Chiffre d'affaires total : " +
        chiffreAffaires(tickets) +
        " DH"
    );

    mostSells(tickets, trips);
}

let userChoix;

do {
    afficherMenu();

    let input = prompt("Votre choix : ");

    if (input.trim() === "") {
        console.log("Veuillez entrer un choix.");
        continue;
    }

    userChoix = Number(input);

    if (isNaN(userChoix)) {
        console.log("Veuillez entrer un nombre.");
        continue;
    }

    if (userChoix === 0) {
        console.log("Au revoir.");
    } else {
        switch (userChoix) {
            case 1:
                afficherTrajets(trips);
                break;

            case 2:
                achetterTicket(trips);
                break;

            case 3:
                afficherTickets(tickets);
                break;

            case 4:
                annulerTicket(tickets);
                break;

            case 5:
                rechercheTicketsParNom(tickets);
                break;

            case 6:
                filtrerParVille(trips);
                break;

            case 7:
                triPrixCroissant(trips);
                break;

            case 8:
                stats();
                break;

            default:
                console.log("Choix invalide.");
        }
    }

} while (userChoix !== 0);