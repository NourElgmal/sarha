const mod = require("../modules/user.module");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendemail } = require("../email/user.email");
module.exports.sinup = async (req, res) => {
  const { name, email, pass, age } = req.body;

  let user = await mod.findOne({ email });
  try {
    if (user) {
      res.json({ msg: "email is aready creted" });
    } else {
      bcrypt.hash(pass, 4, async (err, hash) => {
        await mod.insertMany({ name, email, pass: hash, age });
        const t = jwt.sign({ email: email }, "nour", { expiresIn: 60 * 60 });
        sendemail({
          email,
          t,
          masg: "welcome in the yala outlook",
        });
        res.json({ mas: "add sec" });
      });
    }
  } catch (e) {
    res.json({ msg: e });
  }
};
module.exports.sinin = async (req, res) => {
  const { email, pass } = req.body;
  try {
    let user = await mod.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(pass, user.pass);
      if (match) {
        if (user.emailconf) {
          const t = jwt.sign(
            { email: email, id: user._id, emailconf: user.emailconf },
            "nour"
          );
          res.json({ msg: t });
        } else {
          res.json({ msg: "must verfiy frist shck your outlook" });
        }
      } else {
        res.json({ msg: "err in pass" });
      }
    } else {
      res.json({ msg: "err in email" });
    }
  } catch (e) {
    res.json({ msg: e });
  }
};
module.exports.getu = async (req, res) => {
  const user = await mod.find({});
  res.json({ msg: user });
};
