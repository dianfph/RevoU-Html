
/* Hitung Segitiga*/
      function luassegitiga() {
        let alas3 = parseFloat(document.getElementById("alas-segi3").value);
        let tinggi3 = parseFloat(document.getElementById("tinggi-segi3").value);
        if (isNaN(alas3) || isNaN(tinggi3)) {
            alert("Masukan angka terlebih dahulu!");
            return;
          }
        let luas = 0.5 * alas3 * tinggi3;
        
        document.getElementById("rluassegi3").value = "Rumus : L = 0.5 x " + alas3 + " x " + tinggi3;
        document.getElementById("segi3").value = "Luas Segitiga : " + luas;
      }


      function kelilingsegitiga() {
        let nilaia = parseFloat(document.getElementById("nilaiasegi3").value);
        let nilaib = parseFloat(document.getElementById("nilaibsegi3").value);
        let nilaic = parseFloat(document.getElementById("nilaicsegi3").value);
        if (isNaN(nilaia) || isNaN(nilaib) || isNaN(nilaic)) {
          alert("Masukan angka terlebih dahulu!");
          return;
        }
        let keliling = nilaia + nilaib + nilaic;
        
        document.getElementById("rkelsegi3").value = "Rumus : K = " + nilaia + " + " + nilaib + " + " + nilaic;
        document.getElementById("kelsegi3").value = "Keliling Segitiga : " + keliling;
      }
      
/* Hitung Jajargenjang */

         function luasgenjang() {
          let alasgenj = parseFloat(document.getElementById("alasgenjang").value);
          let tinggigenj = parseFloat(document.getElementById("miringgenjang").value);
          if (isNaN(alasgenj) || isNaN(tinggigenj)) {
            alert("Masukan angka terlebih dahulu!");
            return;
          }

        let luasgenj = alasgenj * tinggigenj;
                
        document.getElementById("rluasgenj").value = "Rumus : L = " + alasgenj + " x " + tinggigenj;
        document.getElementById("luasgenj").value = "Luas Jajar Genjang : " + luasgenj;
        }

  
        function kelilinggenjang() {
        let alaskelgenj = parseFloat(document.getElementById("alaskelgenjang").value);
        let miringkelgenj = parseFloat(document.getElementById("miringkelgenjang").value);
        if (isNaN(alaskelgenj) || isNaN(miringkelgenj)) {
        alert("Masukan angka terlebih dahulu!");
        return;
        }
        let kelgenj = 2 * alaskelgenj + 2 * miringkelgenj;

        document.getElementById("rkelgenjang").value = "Rumus : K = 2 (" + alaskelgenj + " + " + miringkelgenj + ")";
        document.getElementById("kelgenjang").value = "Keliling Jajar Genjang : " + kelgenj;
        }


        