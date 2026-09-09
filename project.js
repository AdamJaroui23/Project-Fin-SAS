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
    console.log("0. Quitter \n");
    let userChoix = prompt("Votre choix : ")
}

function afficherTrajets(trips) {
    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];
        console.log("#" + trip.id, trip.departure + " → " + trip.destination);
        console.log("Départ : " + trip.departureTime);
        console.log("Arrivée : " + trip.arrivalTime);
        console.log("Prix : " + trip.price);
        console.log("Places disponibles : " + trip.availableSeats);
    }
}

function rechercheTrajet(trips, idTrajet) {
    let trajet;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === idTrajet) {
            trajet = trips[i];
            break;
        }
    }

    if (trajet) {
        console.log("#" + trajet.id, trajet.departure + " → " + trajet.destination);
        console.log("Départ : " + trajet.departureTime);
        console.log("Arrivée : " + trajet.arrivalTime);
        console.log("Prix : " + trajet.price);
        console.log("Places disponibles : " + trajet.availableSeats);
    } else {
        console.log("Aucun trajet trouvé pour cet id.");
    }

    return trajet || null;
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
    let passengerName = prompt("Donner le nom du passager pour acheter une ticket: ");
    let ticket = {
        idTicket : tickets.length + 1,
        passengerName: passengerName,
        tripId: trajet.id,
        seatNumber: 50 - trajet.availableSeats + 1,
        price: trajet.price
    };

    tickets.push(ticket);
    trajet.availableSeats--;

    console.log("Ticket acheté avec succès.");
    console.log("Ticket #" + ticket.idTicket );
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
    return ticket;
}

function achetterTicket(trips) {
    let idTrajet = +prompt("Donner l'id du trajet : ");
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

function afficherTickets(tickets, trips) {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    console.log("=== TICKETS ===\n");

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let trajet = trips.find(function (trip) {
            return trip.id === ticket.tripId;
        });

        console.log("Ticket #" + ticket.idTicket);
        console.log("Passager : " + ticket.passengerName);
        console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
        console.log("Place : " + ticket.seatNumber);
        console.log("Prix : " + ticket.price + " DH");
    }
}
achetterTicket(trips)
afficherTickets(tickets, trips);