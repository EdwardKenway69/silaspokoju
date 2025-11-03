// scripts.js
// Pełny skrypt: obsługa modala, dynamiczne ustawianie offsetu dla fixed header,
// płynne przewijanie do kotwic z uwzględnieniem headera oraz fokus na przycisku kupna.
// Zawiera zaktualizowaną treść Polityki Prywatności zgodnie z Twoim tekstem.
// Język komentarzy: polski.

(() => {
  // ---------- ELEMENTY MODALA ----------
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close');

  // Treści modalów — edytuj w razie potrzeby
  const content = {
    contact: {
      title: 'Kontakt',
      html: `
        <p>Masz pytania? Napisz do mnie:</p>
        <p><a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a></p>
        <p>Odpowiadam zwykle w ciągu 24-48 godzin.</p>
      `
    },
    about: {
      title: 'O mnie',
      html: `
        <p>Cześć, jestem Adrian — autor ebooka "Siła Spokoju".</p>
        <p>Specjalizuję się w praktycznych metodach radzenia sobie ze stresem i wzmacnianiu pewności siebie. Ten ebook to esencja sprawdzonych technik i narzędzi, które pomogą Ci zachować jasność i spokój w najtrudniejszych momentach.</p>
      `
    },
    privacy: {
      title: 'Polityka Prywatności',
      html: `
        <h4>Postanowienia ogólne</h4>
        <p>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników sklepu internetowego prowadzonego przez Adriana (dalej: „Administrator”), dostępnego pod adresem <strong>silaspokoju.pl</strong>.</p>
        <p>Dokument został przygotowany zgodnie z RODO (Rozporządzenie UE 2016/679 z dnia 27 kwietnia 2016 r.).</p>

        <h4>§2. Administrator danych</h4>
        <p>Administratorem danych osobowych jest Adrian, e-mail: <a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a>.</p>
        <p>W sprawach dotyczących danych osobowych można kontaktować się bezpośrednio przez ten adres e-mail.</p>

        <h4>§3. Zakres i cel przetwarzania danych</h4>
        <p>Administrator przetwarza dane osobowe wyłącznie w zakresie niezbędnym do:</p>
        <ul>
          <li>realizacji zamówienia i kontaktu z Klientem,</li>
          <li>obsługi ewentualnych reklamacji,</li>
          <li>spełnienia obowiązków podatkowych i rachunkowych.</li>
        </ul>
        <p>Przetwarzane dane obejmują:</p>
        <ul>
          <li>adres e-mail,</li>
          <li>imię i nazwisko (jeśli podane),</li>
          <li>dane związane z płatnością (otrzymywane od operatora płatności, bez dostępu do numeru karty).</li>
        </ul>

        <h4>§4. Podstawa prawna przetwarzania danych</h4>
        <p>Dane są przetwarzane na podstawie:</p>
        <ul>
          <li>art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy,</li>
          <li>art. 6 ust. 1 lit. c RODO – obowiązki prawne (np. księgowe),</li>
          <li>art. 6 ust. 1 lit. f RODO – uzasadniony interes Administratora (kontakt i bezpieczeństwo transakcji).</li>
        </ul>

        <h4>§5. Okres przechowywania danych</h4>
        <p>Dane przechowywane są przez okres:</p>
        <ul>
          <li>niezbędny do realizacji zamówienia i obsługi reklamacji,</li>
          <li>wynikający z przepisów podatkowych (zazwyczaj 5 lat).</li>
        </ul>
        <p>Po tym czasie dane zostaną trwale usunięte lub zanonimizowane.</p>

        <h4>§6. Odbiorcy danych</h4>
        <p>Dane mogą być udostępniane wyłącznie:</p>
        <ul>
          <li>operatorom płatności internetowych,</li>
          <li>firmom hostingowym utrzymującym stronę sklepu.</li>
        </ul>
        <p>Dane nie są przekazywane ani sprzedawane innym podmiotom.</p>

        <h4>§7. Prawa Klienta</h4>
        <p>Każdy Klient ma prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>poprawienia lub usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przeniesienia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</li>
        </ul>

        <h4>§8. Pliki cookies</h4>
        <p>Sklep może wykorzystywać pliki cookies do celów technicznych i statystycznych.</p>
        <p>Użytkownik może samodzielnie zarządzać plikami cookies w ustawieniach swojej przeglądarki.</p>
        <p>Korzystanie ze sklepu bez zmiany ustawień oznacza zgodę na ich użycie.</p>

        <h4>§9. Zmiany w Polityce Prywatności</h4>
        <p>Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.</p>
        <p>Każda nowa wersja będzie publikowana na stronie sklepu i obowiązuje od dnia jej zamieszczenia.</p>
      `
    },
    terms: {
      title: 'Regulamin',
      html: `
        <h4>Postanowienia ogólne</h4>
        <p>Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego prowadzonego przez Adriana (zwanego dalej „Sprzedawcą”).</p>

        <p>Kontakt ze Sprzedawcą możliwy jest wyłącznie pod adresem e-mail: <a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a>.</p>

        <p>Regulamin jest skierowany do Konsumentów dokonujących zakupu Produktu cyfrowego w formacie PDF.</p>

        <p>Dokonanie zakupu w sklepie oznacza akceptację niniejszego Regulaminu.</p>

        <h4>§2. Definicje</h4>
        <p><strong>Sklep</strong> – strona internetowa, za pośrednictwem której Klient może dokonać zakupu Produktu cyfrowego.</p>
        <p><strong>Klient</strong> – osoba fizyczna dokonująca zakupu Produktu cyfrowego.</p>
        <p><strong>Produkt cyfrowy</strong> – plik PDF dostarczany drogą elektroniczną po dokonaniu płatności.</p>
        <p><strong>Zamówienie</strong> – oświadczenie woli Klienta zmierzające do zawarcia umowy sprzedaży.</p>
        <p><strong>Umowa</strong> – umowa sprzedaży treści cyfrowej zawierana pomiędzy Klientem a Sprzedawcą.</p>

        <h4>§3. Dane Sprzedawcy</h4>
        <p><strong>Sprzedawca:</strong> Adrian</p>
        <p><strong>Adres e-mail:</strong> <a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a></p>
        <p>Sprzedawca prowadzi sprzedaż w formie elektronicznej. Kontakt ze Sprzedawcą odbywa się wyłącznie drogą e-mailową.</p>

        <h4>§4. Zasady składania zamówień</h4>
        <p>Zamówienia można składać przez stronę internetową Sklepu po wypełnieniu formularza i dokonaniu płatności.</p>
        <p>Klient zobowiązany jest do podania prawidłowego adresu e-mail, na który zostanie wysłany zakupiony Produkt.</p>
        <p>Umowa zostaje zawarta w momencie zaksięgowania płatności.</p>
        <p>Po dokonaniu płatności Klient otrzymuje wiadomość e-mail z linkiem do pobrania Produktu cyfrowego.</p>

        <h4>§5. Płatności i dostarczenie produktu cyfrowego</h4>
        <p>Płatność za Produkt cyfrowy dokonywana jest z góry za pomocą dostępnych metod płatności elektronicznych.</p>
        <p>Po zaksięgowaniu płatności Produkt cyfrowy zostaje dostarczony automatycznie na adres e-mail Klienta.</p>
        <p>Produkt jest dostępny w formacie PDF i wymaga programu umożliwiającego jego otwarcie (np. Adobe Acrobat Reader lub inny czytnik PDF).</p>
        <p>W przypadku problemów z pobraniem lub otwarciem pliku Klient powinien skontaktować się ze Sprzedawcą pod adresem <a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a>.</p>

        <h4>§6. Prawo odstąpienia od umowy</h4>
        <p>Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, Klient traci prawo do odstąpienia od umowy, jeśli wyraził zgodę na dostarczenie treści cyfrowej przed upływem 14 dni od zakupu.</p>
        <p>Klient, dokonując zakupu, wyraża zgodę na natychmiastowe dostarczenie Produktu cyfrowego i traci prawo do zwrotu.</p>
        <p>Zwroty nie są możliwe, ponieważ Produkt ma charakter cyfrowy i jest dostarczany automatycznie po dokonaniu płatności.</p>

        <h4>§7. Reklamacje</h4>
        <p>Klient ma prawo złożyć reklamację, jeśli dostarczony plik jest uszkodzony lub nie można go otworzyć.</p>
        <p>Reklamacje należy zgłaszać drogą e-mailową na adres: <a href="mailto:silaspokoju@gmail.com">silaspokoju@gmail.com</a>.</p>
        <p>Reklamacja zostanie rozpatrzona w ciągu 14 dni roboczych od jej otrzymania.</p>
        <p>W przypadku uznania reklamacji Sprzedawca zobowiązuje się do ponownego dostarczenia poprawnej wersji Produktu cyfrowego.</p>
        <p>Sprzedawca nie dokonuje zwrotów pieniędzy. Reklamacje dotyczące treści merytorycznej Produktu nie stanowią podstawy do reklamacji.</p>

        <h4>§8. Prawa autorskie</h4>
        <p>Wszystkie treści zawarte w Produktach cyfrowych stanowią własność intelektualną Sprzedawcy.</p>
        <p>Klient otrzymuje niewyłączną licencję na korzystanie z Produktu wyłącznie na własny użytek.</p>
        <p>Zabrania się kopiowania, udostępniania, odsprzedaży i modyfikowania Produktu bez pisemnej zgody Sprzedawcy.</p>

        <h4>§9. Ochrona danych osobowych</h4>
        <p>Administratorem danych osobowych Klienta jest Sprzedawca.</p>
        <p>Dane osobowe są przetwarzane wyłącznie w celu realizacji zamówienia.</p>
        <p>Szczegółowe zasady przetwarzania danych znajdują się w Polityce Prywatności dostępnej na stronie Sklepu.</p>

        <h4>§10. Postanowienia końcowe</h4>
        <p>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego i ustawy o prawach konsumenta.</p>
        <p>Sprzedawca zastrzega sobie prawo do zmiany Regulaminu, o czym poinformuje Klientów z wyprzedzeniem.</p>
        <p>Regulamin wchodzi w życie z dniem opublikowania na stronie internetowej Sklepu.</p>
      `
    }
  };

  // ---------- FUNKCJE MODALA ----------
  function showModal() {
    if (!modal) return;
    // przewiń modal-content na początek przy otwieraniu
    const inner = modal.querySelector('.modal-content');
    if (inner) inner.scrollTop = 0;

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // focus na przycisku close dla dostępności
    modalCloseBtn && modalCloseBtn.focus();
    // Zapobiegaj przewijaniu tła przy otwartym modalu
    document.documentElement.style.overflow = 'hidden';
  }

  function hideModal() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  }

  // Obsługa kliknięć na elementy uruchamiające modal (data-modal)
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-modal');
      if (!key || !content[key]) return;
      modalTitle.textContent = content[key].title;
      modalContent.innerHTML = content[key].html;
      showModal();
    });
  });

  // Zamknięcie modala
  modalCloseBtn && modalCloseBtn.addEventListener('click', hideModal);
  // Kliknięcie poza modal (na backdrop) zamyka
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });
  // Esc zamyka modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) hideModal();
  });

  // ---------- DYNAMICZNE USTAWIANIE WYSOKOŚCI HEADERA (CSS VAR) ----------
  const header = document.querySelector('.site-header');
  const root = document.documentElement;

  function updateHeaderHeight() {
    const h = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    root.style.setProperty('--header-height', `${h}px`);
  }

  // Aktualizuj przy zdarzeniach wpływających na layout
  window.addEventListener('load', updateHeaderHeight);
  window.addEventListener('resize', updateHeaderHeight);

  if ('ResizeObserver' in window && header) {
    const ro = new ResizeObserver(updateHeaderHeight);
    ro.observe(header);
  } else {
    // fallback po krótkim czasie
    setTimeout(updateHeaderHeight, 300);
  }

  // ---------- PŁYNNE PRZEWIJANIE Z OFFSETEM HEADERA ----------
  function smoothScrollToElement(targetEl, updateHash = true) {
    if (!targetEl) return;
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const rect = targetEl.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset;
    const offset = 12; // drobna przestrzeń od góry
    const scrollTo = Math.max(0, Math.round(targetY - headerHeight - offset));

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });

    if (updateHash && (targetEl.id || '') !== '') {
      try {
        history.replaceState(null, '', '#' + targetEl.id);
      } catch (err) {
        // ignore w starych przeglądarkach
      }
    }
  }

  // Delegacja kliknięć na linki kotwiczne (href zaczyna się od '#')
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#0') return;

    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      updateHeaderHeight();
      setTimeout(() => {
        smoothScrollToElement(target, true);

        if (id === 'buy') {
          setTimeout(() => focusPrimaryBuyButton(target), 600);
        }
      }, 10);
    }
  });

  // Jeśli strona załadowana z hashem, przewiń z offsetem
  window.addEventListener('load', () => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          updateHeaderHeight();
          smoothScrollToElement(target, false);
          if (id === 'buy') {
            setTimeout(() => focusPrimaryBuyButton(target), 600);
          }
        }, 80);
      }
    }
  });

  // ---------- UŻYTECZNOŚĆ: FOCUS NA PRZYCISKU KUP TERAZ ----------
  function focusPrimaryBuyButton(buySectionEl) {
    if (!buySectionEl) return;
    const primary = buySectionEl.querySelector('a.btn.primary, button.btn.primary, input.btn.primary');
    if (primary) {
      try {
        primary.focus({ preventScroll: true });
      } catch (err) {
        primary.focus();
      }

      primary.classList.add('focus-pulse-temp');
      if (!document.querySelector('style[data-focus-pulse]')) {
        const style = document.createElement('style');
        style.setAttribute('data-focus-pulse', '1');
        style.textContent = `
          .focus-pulse-temp{
            box-shadow: 0 6px 20px rgba(90,166,216,0.25), 0 0 0 4px rgba(90,166,216,0.08);
            transform: translateY(-2px);
            transition: box-shadow .25s ease, transform .15s ease;
          }
        `;
        document.head.appendChild(style);
      }
      setTimeout(() => {
        primary.classList.remove('focus-pulse-temp');
      }, 1400);

      announceForAccessibility('Przewinięto do sekcji zakupu. Aby dokończyć, kliknij Kup teraz.');
    }
  }

  // Pomocnicza funkcja do krótkich komunikatów dla czytników ekranu
  function announceForAccessibility(message) {
    let live = document.getElementById('aria-live-region');
    if (!live) {
      live = document.createElement('div');
      live.id = 'aria-live-region';
      live.setAttribute('aria-live', 'polite');
      live.setAttribute('aria-atomic', 'true');
      live.style.position = 'absolute';
      live.style.left = '-9999px';
      live.style.width = '1px';
      live.style.height = '1px';
      document.body.appendChild(live);
    }
    live.textContent = message;
    setTimeout(() => { live.textContent = ''; }, 3000);
  }

  // ---------- KONIEC IIFE ----------
})();
