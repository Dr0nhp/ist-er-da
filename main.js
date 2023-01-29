function generateDays() {
    /*
    0 = Not available
    1 = save
    2 = maybe
    3 = raid
    */
    const where = [0, 3, 1, 2, 3, 2, 2]
    const d = new Date();
    let cur_day = d.getDay();
    return [cur_day, where]
}


function a1(cur_day, where) {
    if (where[cur_day] != 1) {
        return "Sorry, nein";
    }
    else {
        return "Jawollo, BR BR BR";
    }
}

function a2(cur_day, where) {
    if (where[cur_day] != 1) { //mod7
        let c = []; //alle save dates als array pos
        for (let i = 0; i < where.length - 1; i++) {
            if (where[i] == 1) {
                c.push(i);
            }
        }

        if (c.length < 1) {
            console.log("error keine save dates");
        }
        else if (c.length == 1) {
            return (c[0] - cur_day % 7);
        }
        else {
            console.log(c)
            let dif = [];
            for (e in c) {
                dif.push(e - cur_day % 7);
            }
            console.log(dif)
            return (dif.sort()[0]);
        }

    }
    else {
        return 0; //0 Tage
    }
}

function main() {
    const helper = generateDays()
    const a = helper[0];
    const b = helper[1];
    document.getElementById("answer-1").innerHTML = a1(a, b);
    document.getElementById("answer-2").innerHTML = a2(a, b);
}
main();
