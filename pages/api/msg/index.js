const { default: connectMongo } = require("@/database/conn");
const { default: Msg } = require("@/model/message");


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

                const msgData = await Msg.find();
                // console.log(msgData);
                    // if (msgData.length <= 0) {
                    //         return res.status(404).json({
                    //                 message: 'No Msg Data Found!'
                    //             })
                    //         }
                        
                            return res.status(200).json({ msgData });
                        
            } catch (err) {
                return res.status(404).json({
                    error: 'Something Gone Wrong Fetching Users!'
                })
            }
            break;



        case 'POST':
            const {name, number, msg} = req.body;
            const formData = {
                name,
                number,
                msg,
                read: false
            }
            console.log(formData)
            
            // console.log(name, email);
            

            // if (!name || !email) {
            //     return res.status(404).json({
            //         message: 'Not Valid Input Data!'
            //     })
            // }

            return Msg.create(formData)
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



    res.status(200).json({ name: 'John Doe' })





}