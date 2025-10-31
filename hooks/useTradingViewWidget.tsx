import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    //Проверяем, существует ли контейнер и не был ли график уже загружен.
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    // Добавление HTML-структуры
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%; height:${height}px;"></div>`;
    //Создаём тег <script>
    const script = document.createElement("script");
    //Задаём ему src
    script.src = scriptUrl;
    //скрипт загружается асинхронно.
    script.async = true;
    //Передаём конфигурацию в innerHTML как JSON.
    script.innerHTML = JSON.stringify(config);
    //Вставляем script в нутрь div
    containerRef.current.appendChild(script);
    //График загружен
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);
  return containerRef;
};

export default useTradingViewWidget;
