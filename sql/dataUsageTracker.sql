create table learner(

id serial,
first_name text not null,
last_name text not null,
email text not null,
usercode text not null,
data_balance int not null  

);


create table application(


    id serial,
    name text not null,
    usage_per_minute text not null

);


insert into application(name,usage_per_minute) values (lina,10);
insert into application(name,usage_per_minute) values (bam,10);
insert into application(name,usage_per_minute) values ( sona,10);


create table learner_application_usage(

id,
leaner_id,
app_id,
minutes_used

foreign key(leaner_id) reference learner(id),

    foreign key(app_id) reference application(id),


);



