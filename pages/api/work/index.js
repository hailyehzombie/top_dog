const { default: connectMongo } = require("@/database/conn");
const { default: Work } = require("@/model/work");

export default async function handler(req, res) {


    connectMongo().catch(() => {
        res.status(200).json({
            error: 'Database Connection Failed'
        })
    })

    const method = req.method;

    switch (method) {
        case 'GET':

            try {

                const workData = await Work.find();
                // console.log(msgData);
                    // if (msgData.length <= 0) {
                    //         return res.status(404).json({
                    //                 message: 'No Msg Data Found!'
                    //             })
                    //         }
                        
                            return res.status(200).json({ workData });
                        
            } catch (err) {
                return res.status(404).json({
                    error: 'Something Gone Wrong Fetching Users!'
                })
            }
            break;



        case 'POST':
            const {workName, workDate} = req.body;
            console.log(workName, workDate);
            const formData = {
                name:workName,
                date:workDate,
                status: true
            }
            // console.log(formData);


            return Work.create(formData)
                .then(resultData => {
                    // console.log(createUser);
                    return res.status(200).json({
                        message: 'User Created!',
                        resultData
                    });
                }).catch(err => {
                    return res.status(404).json({
                        error: 'Something Gone Wrong Fetching Users!',
                        err
                    })
                })
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE', "PUT"]);
            res.status(405).end(`Method ${method} Not Allowd!`);

    }



    
}