const nodemailer = require("nodemailer");
const mod = require("../modules/user.module");
const jwt = require("jsonwebtoken");
module.exports.sendemail = async (obtion) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "marwanelgmal@outlook.com",
        pass: "01100Alm",
      },
    });

    const info = await transporter.sendMail({
      from: '"nour sarah" <marwanelgmal@outlook.com>', // sender address
      to: obtion.email, // list of receivershttps://www.outlook.com/?refd=account.microsoft.com&fref=home.banner.viewinbox
      subject: "Hello ✔", // Subject line
      html: `
      <div class="green-div">
        hellow in saraha please enter 
        <a href="http://localhost:3000/verfay/${obtion.t}">verfie</a>
    </div>
      `, // html body
    });

    console.log("Message sent: %s", info);
  } catch (error) {
    console.error("Error sending email: %s", error);
  }
};

module.exports.verfay=async(req,res)=>{
    const{t}=req.params;
    let user;
    await jwt.verify(t,'nour',async(err,decode)=>{
        if (err) {
            res.json({"msg":"err in t"});
        } else {
             user = await mod.findOne({ email: decode["email"] });
             console.log( decode["email"]);
        }
    })
     if (user) {
        await mod.findOneAndUpdate(
            { email:user.email },
            {emailconf:true}, // على سبيل المثال، تحديث حالة التحقق
          );
          res.json({"msg":"tmam verfay"});
     } else {
        res.json({"msg":"feel"});
     }
}

// لاستدعاء دالة الإرسال
//module.exports.sendemail();
