import assert from 'assert';
import DataUsageTracker from '../data_usage_tracker.js';
import pgPromise from 'pg-promise';

// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/data_usage_tracker_test";

const config = { 
	connectionString : DATABASE_URL
}

const pgp = pgPromise();
const db = pgp(config);

let dataTracker = DataUsageTracker(db);

describe("", function () {

    beforeEach(async function () {

        await db.none(`delete from booking`);

    });

    it("", async function () {

        assert.equal('', );
    });

    it("", async function () {

        assert.equal('', );
    });

    it("", async function () {


        assert.equal(true, false);
    });

    it("", async function () {

        assert.equal(true,false )
    })

    it("", async function () {
       


        assert.equal(true, false);

    });

    it("", function() {
        assert.equal(1, 2);
    })

    it("", function() {
        assert.equal(1, 2);
    })
    it("", function() {
        assert.equal(1, 2);
    })

    after(function () {
        db.$pool.end()
    });

});