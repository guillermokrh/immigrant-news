    var avatarList = ['Alligator.png', 'Anteater.png', 'Armadillo.png', 'Auroch.png', 'Axolotl.png', 'Badger.png', 'Bat.png', 'Beaver.png', 'Buffalo.png', 'Camel.png', 'Capybara.png', 'Chameleon.png', 'Cheetah.png', 'Chinchilla.png', 'Chipmunk.png', 'Chupacabra.png', 'Cormorant.png', 'Coyote.png', 'Crow.png', 'Dingo.png', 'Dinosaur.png', 'Dolphin.png', 'Duck.png', 'Elephant.png', 'Ferret.png', 'Fox.png', 'Frog.png', 'Giraffe.png', 'Gopher.png', 'Grizzly.png', 'Hedgehog.png', 'Hippo.png', 'Hyena.png', 'Ibex.png', 'Ifrit.png', 'Iguana.png', 'Jackal.png', 'Kangaroo.png', 'Koala.png', 'Kraken.png', 'Lemur.png', 'Leopard.png', 'Liger.png', 'Llama.png', 'Manatee.png', 'Mink.png', 'Monkey.png', 'Moose.png', 'Narwhal.png', 'Nyan Cat.png', 'Orangutan.png', 'Otter.png', 'Panda.png', 'Penguin.png', 'Platypus.png', 'Pumpkin.png', 'Python.png', 'Quagga.png', 'Rabbit.png', 'Raccoon.png', 'Rhino.png', 'Sheep.png', 'Shrew.png', 'Skunk.png', 'Squirrel.png', 'Tiger.png', 'Turtle.png', 'Walrus.png', 'Wolf.png', 'Wolverine.png', 'Wombat.png']
    avatarList.forEach(function(item, index, array) {
        var name = item.split(".")[0];
        console.log(name);
        firebase.database().ref('avatars/' + name).set({
            path: '/img/avatars/' + item,
            used: false
        });
    });

    // Update avatarList to all used
    var avatarList = ['Alligator.png', 'Anteater.png', 'Armadillo.png', 'Auroch.png', 'Axolotl.png', 'Badger.png', 'Bat.png', 'Beaver.png', 'Buffalo.png', 'Camel.png', 'Capybara.png', 'Chameleon.png', 'Cheetah.png', 'Chinchilla.png', 'Chipmunk.png', 'Chupacabra.png', 'Cormorant.png', 'Coyote.png', 'Crow.png', 'Dingo.png', 'Dinosaur.png', 'Dolphin.png', 'Duck.png', 'Elephant.png', 'Ferret.png', 'Fox.png', 'Frog.png', 'Giraffe.png', 'Gopher.png', 'Grizzly.png', 'Hedgehog.png', 'Hippo.png', 'Hyena.png', 'Ibex.png', 'Ifrit.png', 'Iguana.png', 'Jackal.png', 'Kangaroo.png', 'Koala.png', 'Kraken.png', 'Lemur.png', 'Leopard.png', 'Liger.png', 'Llama.png', 'Manatee.png', 'Mink.png', 'Monkey.png', 'Moose.png', 'Narwhal.png', 'Nyan Cat.png', 'Orangutan.png', 'Otter.png', 'Panda.png', 'Penguin.png', 'Platypus.png', 'Pumpkin.png', 'Python.png', 'Quagga.png', 'Rabbit.png', 'Raccoon.png', 'Rhino.png', 'Sheep.png', 'Shrew.png', 'Skunk.png', 'Squirrel.png', 'Tiger.png', 'Turtle.png', 'Walrus.png', 'Wolf.png', 'Wolverine.png', 'Wombat.png']
    avatarList.forEach(function(item, index, array) {
        var name = item.split(".")[0];
        console.log(name);
        firebase.database().ref('avatars/' + name).update({
            used: false
        });
    });