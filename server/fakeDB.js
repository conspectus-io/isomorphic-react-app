const fakeDB = [{
        id: 'abcd190d',
        title: "Sample Post One",
        slug: 'hows-business-boomin',
        content: 'Before they sold out fam bicycle rights, tbh venmo cronut stumptown ramps.  Try-hard you probably havent heard of them crucifix irure yr.Locavore fanny pack pok pok drinking vinegar, authentic retro velit ut do kombucha.Neutra kitsch flexitarian, synth bespoke enim normcore intelligentsia heirloom tilde thundercats fingerstache ut. 90s la croix cold-pressed hoodie.  Deep v qui  williamsburg, bespoke mlkshk kombucha pug kinfolk chartreuse.  Narwhal consequat poke coloring book, incididunt distillery lumbersexual cornhole lyft aesthetic nostrud est  intelligentsia bushwick gluten-free.'
    },
    {
        id: 'xys190a',
        title: 'Sample Post Two',
        slug: 'the-pathway-to-more-success',
        content: 'Eiusmod fixie ea dolor, poutine next level pinterest synth roof party marfa bitters.  Tempor ea kinfolk, direct trade  man bun farm-to-table proident lomo affogato fam voluptate  delectus gochujang polaroid bushwick.  Venmo accusamus before they sold out, synth placeat church-key chillwave gochujang deep v seitan kombucha asymmetrical duis  brooklyn.  Ennui flannel humblebrag, hoodie dolor  photo booth prism keffiyeh.  Bitters fixie blue bottle vero, banjo farm-to-table flexitarian ethical aute  hashtag vice ramps vape edison bulb.  Occupy enamel pin swag cray, affogato banjo blog echo park kombucha nisi cliche.  Anim  pork belly commodo, waistcoat twee craft beer retro farm-to-table.'
    },
    {
        id: '128sd043hd',
        title: 'Sample Post Three',
        slug: 'cloth-talk-part-i',
        content: 'Intelligentsia iceland yuccie kinfolk, qui  8-bit fashion axe DIY.  Deep v fugiat  live-edge, cold-pressed messenger bag chia literally pickled.  Viral trust fund ea cold-pressed, cronut excepteur  cliche vexillologist enamel pin asymmetrical eiusmod shoreditch.  You probably havent heard of them occupy celiac, scenester hot chicken biodiesel put a bird on it lumbersexual waistcoat reprehenderit consequat veniam gentrify.Microdosing enim swag, food truck la croix salvia af quinoa mlkshk marfa intelligentsia bushwick enamel pin typewriter.Activated charcoal franzen williamsburg, XOXO excepteur exercitation pork belly.Adipisicing odio esse typewriter, nesciunt narwhal aesthetic tote bag commodo semiotics cornhole.'
    },
    {
        id: 'xys190b',
        title: 'Sample Post Four',
        slug: 'cloth-talk-part-ii',
        content: 'Health goth man braid put a bird on it, keffiyeh slow-carb chambray lomo.  Fugiat  ullamco leggings, disrupt chia celiac occaecat  mixtape.  Messenger bag culpa  aesthetic man bun before they sold out intelligentsia roof party, swag +1 schlitz.  Everyday carry vaporware cold-pressed man bun etsy sint.  Retro 8-bit duis, wayfarers cred tumeric squid lomo velit  man braid.  Aliqua drinking vinegar retro jean shorts taxidermy brunch reprehenderit, flannel nisi snackwave normcore williamsburg shoreditch proident sriracha.  Dolore deserunt  YOLO stumptown vaporware, freegan placeat photo booth paleo wayfarers.'
    },
    {
        id: '128sd043hf',
        title: 'Sample Post Five',
        slug: 'cloth-talk-part-iii',
        content: 'Beard locavore banh mi coloring book tumblr.  Raw denim whatever vero mixtape, ugh neutra occaecat  do blue bottle farm-to-table affogato cliche.  Coloring book selfies hammock, trust fund incididunt chia mixtape tote bag synth.  Activated charcoal nesciunt tilde chartreuse letterpress hammock.  Poutine +1 beard mustache bushwick.  Salvia paleo tattooed, mustache butcher letterpress disrupt vexillologist small batch occupy.  Sapiente neutra deserunt, master cleanse church-key tumeric iceland af readymade occupy artisan hammock photo booth.'
    },
    {
        id: 'xys190s',
        title: 'Sample Post Six',
        slug: 'the-major-key',
        content: 'Elit small batch gluten-free yr celiac, affogato yuccie hashtag direct trade  vegan thundercats.  Humblebrag aesthetic microdosing, twee tbh thundercats nihil sartorial waistcoat poke esse  freegan brunch.  Vape pork belly viral tousled cold-pressed aesthetic, vaporware four dollar toast thundercats fingerstache hashtag.  Messenger bag tote bag vero, elit sed forage hell of deep v nihil vape.  Anim  ea selfies tbh duis  pinterest.  DIY aesthetic tousled tilde ramps, disrupt sustainable.  Everyday carry deep v cronut, narwhal brooklyn YOLO placeat vape iceland tofu aute.'
    },
    {
        id: '128sd04d',
        title: 'Sample Post Seven',
        slug: 'you-smart-you-loyal',
        content: 'Skateboard tofu pok pok, health goth swag portland labore humblebrag flannel adipisicing.  Cardigan chambray nisi chartreuse eu  ut, dolore portland DIY green juice thundercats.  Authentic subway tile drinking vinegar, venmo small batch crucifix four loko mixtape.  Af four loko non  sriracha adipisicing jean shorts.  Sustainable nesciunt tousled four loko, eu  selvage pok pok chambray.  Placeat subway tile cold-pressed, bespoke dolore tousled try-hard trust fund sint  cray kitsch migas four loko voluptate.  Fugiat  bespoke swag irure  fap, la croix literally.'
    }
]

export default fakeDB