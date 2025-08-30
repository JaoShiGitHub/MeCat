function MeCat() {
  return (
    <div className="flex items-center gap-4">
      <img
        className="h-[70px] "
        alt="Cat is holding a pencil"
        src="/images/cat-pencil.png"
      />
      <span className="text-meCat font-lifeSavers font-semibold text-[clamp(14px,7vh,120px)]">
        MeCat
      </span>
    </div>
  );
}

export default MeCat;
