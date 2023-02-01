function generateDays() {
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
    if (where[cur_day] != 1) {
        let c = []; //alle save dates als array pos
        for (let i = 0; i < where.length; i++) {
            if (where[i] == 1) {
                c.push(i);
            }
        }

        if (c.length < 1) {
            return 9999;
        }
        else if (c.length == 1) {
            console.log(c[0],c)
            return (c[0] - cur_day % 7);
        }
        else {
            let dif = [];
            for (e in c) {
                dif.push(c[e] - cur_day % 7);
            }
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
