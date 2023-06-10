
      function makeCalculations() {


         //pobieranie godzin ustawionych przez użytkownika
         var fiberglass_replacement_hours = document.getElementById('fiberglass_replacement_hours').value;
         var fiberglass_fix_hours = document.getElementById('fixing_fiberglass_hours').value;
         var service_laptop_hours = document.getElementById('service_laptop_hours').value;
         var service_desktop_hours = document.getElementById('service_desktop_hours').value;
         var webapp_design_hours = document.getElementById("webapp_design_hours").value;

         //pobranie cen ustalonych
         var fiberglass_replace_pricePerHour = document.getElementById('fiberglass_replacement_pricePerHour').innerHTML;
         var fiberglass_replace_pricePerHour = fiberglass_replace_pricePerHour.replace(/[^\d.]/g, '');
         var fiberglass_fix_pricePerHour = document.getElementById('fixing_fiberglass_pricePerHour').innerHTML;
         var fiberglass_fix_pricePerHour = fiberglass_fix_pricePerHour.replace(/[^\d.]/g, '');
         var service_laptop_pricePerHour = document.getElementById('service_netbook_pricePerHour').innerHTML;
         var service_laptop_pricePerHour = service_laptop_pricePerHour.replace(/[^\d.]/g, '');
         var service_desktop_pricePerHour = document.getElementById('service_desktop_pricePerHour').innerHTML;
         var service_desktop_pricePerHour = service_desktop_pricePerHour.replace(/[^\d.]/g, '');
         var webapp_design_pricePerHour = document.getElementById('webapp_pricePerHour').innerHTML;
         var webapp_design_pricePerHour = webapp_design_pricePerHour.replace(/[^\d.]/g, '');
         console.log(fiberglass_fix_pricePerHour);

         var fiberglass_replace_totalCost = fiberglass_replacement_hours * fiberglass_replace_pricePerHour;
         var fiberglass_fix_totalCost = fiberglass_fix_pricePerHour * fiberglass_fix_hours;
         var service_laptop_totalCost = service_laptop_hours * service_laptop_pricePerHour;
         var service_desktop_totalCost = service_desktop_hours * service_desktop_pricePerHour;
         var webapp_design_totalCost = webapp_design_hours * webapp_design_pricePerHour;

         var price = fiberglass_replace_totalCost + fiberglass_fix_totalCost + service_laptop_totalCost + service_desktop_totalCost + webapp_design_totalCost;
         var price = price.toLocaleString('pl-PL', { minimumFractionDigits: 2 });
         return document.getElementById('totalCost').innerHTML = price + ' PLN';
    }

    function resetCalculator(){
         document.getElementById('fiberglass_replacement_hours').value = 0;
         document.getElementById('fixing_fiberglass_hours').value = 0;
         document.getElementById('service_laptop_hours').value = 0;
         document.getElementById('service_desktop_hours').value = 0;
         document.getElementById("webapp_design_hours").value = 0;
         document.getElementById('totalCost').innerHTML = "---,-- PLN";
    }